import fs from "node:fs";
import path from "node:path";

const outputDir = path.resolve("sport_booking/data");
fs.mkdirSync(outputDir, { recursive: true });

const COURTS = 10;
const START_DATE = new Date("2026-06-01T00:00:00+07:00");
const DAYS = 28;
const OPEN_HOUR = 6;
const CLOSE_HOUR = 22;
const PRICE_VND = 120_000;
const VARIABLE_COST_VND = 60_000;
const DISCOUNT_RATE = 0.05;
const DISCOUNTED_PRICE_VND = PRICE_VND * (1 - DISCOUNT_RATE);

function csvEscape(value) {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(rows) {
  const headers = Object.keys(rows[0]);
  return [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ].join("\n") + "\n";
}

function round(value, digits = 2) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function dayName(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    weekday: "long",
  }).format(date);
}

function segmentFor(date, hour) {
  const day = date.getDay();
  const weekend = day === 0 || day === 6;
  if (weekend && hour >= 16) {
    return { segment: "weekend_peak_16_plus", target: 1 };
  }
  if (!weekend && hour >= 18) {
    return { segment: "weekday_evening_18_plus", target: 0.7 };
  }
  return { segment: "other_off_peak", target: 0.4 };
}

const slots = [];
for (let dayOffset = 0; dayOffset < DAYS; dayOffset += 1) {
  const date = new Date(START_DATE);
  date.setDate(START_DATE.getDate() + dayOffset);
  for (let hour = OPEN_HOUR; hour < CLOSE_HOUR; hour += 1) {
    for (let court = 1; court <= COURTS; court += 1) {
      const segment = segmentFor(date, hour);
      slots.push({
        slot_id: `${formatDate(date)}_${String(hour).padStart(2, "0")}_C${String(court).padStart(2, "0")}`,
        date: formatDate(date),
        day_of_week: dayName(date),
        is_weekend: date.getDay() === 0 || date.getDay() === 6 ? 1 : 0,
        court_id: `C${String(court).padStart(2, "0")}`,
        start_hour: hour,
        end_hour: hour + 1,
        demand_segment: segment.segment,
        target_occupancy_rate: segment.target,
      });
    }
  }
}

const bySegment = Map.groupBy(slots, (slot) => slot.demand_segment);
for (const segmentSlots of bySegment.values()) {
  const targetCount = Math.round(segmentSlots.length * segmentSlots[0].target_occupancy_rate);
  const ranked = [...segmentSlots].sort((a, b) => {
    const scoreA = (a.start_hour * 17 + Number(a.court_id.slice(1)) * 31 + Number(a.date.slice(-2)) * 13) % 997;
    const scoreB = (b.start_hour * 17 + Number(b.court_id.slice(1)) * 31 + Number(b.date.slice(-2)) * 13) % 997;
    return scoreA - scoreB || a.slot_id.localeCompare(b.slot_id);
  });
  const bookedIds = new Set(ranked.slice(0, targetCount).map((slot) => slot.slot_id));
  for (const slot of segmentSlots) {
    slot.is_booked = bookedIds.has(slot.slot_id) ? 1 : 0;
    slot.price_vnd = PRICE_VND;
    slot.variable_cost_vnd = slot.is_booked ? VARIABLE_COST_VND : 0;
    slot.revenue_vnd = slot.is_booked ? PRICE_VND : 0;
    slot.contribution_vnd = slot.revenue_vnd - slot.variable_cost_vnd;
  }
}

slots.sort((a, b) => a.slot_id.localeCompare(b.slot_id));

const summary = [...bySegment.entries()].map(([segment, segmentSlots]) => {
  const available = segmentSlots.length;
  const booked = segmentSlots.reduce((sum, row) => sum + row.is_booked, 0);
  const revenue = segmentSlots.reduce((sum, row) => sum + row.revenue_vnd, 0);
  const cost = segmentSlots.reduce((sum, row) => sum + row.variable_cost_vnd, 0);
  return {
    demand_segment: segment,
    available_court_hours: available,
    booked_court_hours: booked,
    occupancy_rate: booked / available,
    price_vnd: PRICE_VND,
    variable_cost_per_booked_hour_vnd: VARIABLE_COST_VND,
    revenue_vnd: revenue,
    variable_cost_vnd: cost,
    contribution_vnd: revenue - cost,
    revenue_per_available_hour_vnd: revenue / available,
    contribution_per_available_hour_vnd: (revenue - cost) / available,
  };
});

const totalAvailable = slots.length;
const totalBooked = slots.reduce((sum, row) => sum + row.is_booked, 0);
const totalRevenue = slots.reduce((sum, row) => sum + row.revenue_vnd, 0);
const totalCost = slots.reduce((sum, row) => sum + row.variable_cost_vnd, 0);
summary.push({
  demand_segment: "total",
  available_court_hours: totalAvailable,
  booked_court_hours: totalBooked,
  occupancy_rate: totalBooked / totalAvailable,
  price_vnd: PRICE_VND,
  variable_cost_per_booked_hour_vnd: VARIABLE_COST_VND,
  revenue_vnd: totalRevenue,
  variable_cost_vnd: totalCost,
  contribution_vnd: totalRevenue - totalCost,
  revenue_per_available_hour_vnd: totalRevenue / totalAvailable,
  contribution_per_available_hour_vnd: (totalRevenue - totalCost) / totalAvailable,
});

const offPeak = summary.find((row) => row.demand_segment === "other_off_peak");
const scenarioRates = [0.4, 0.425, 0.4444444444, 0.45, 0.5, 0.6];
const scenarios = scenarioRates.flatMap((occupancy) => {
  const bookings = offPeak.available_court_hours * occupancy;
  const baselineBookings = offPeak.booked_court_hours;
  const incrementalBookings = Math.max(0, bookings - baselineBookings);
  const blanketRevenue = bookings * DISCOUNTED_PRICE_VND;
  const blanketCost = bookings * VARIABLE_COST_VND;
  const incrementalOnlyRevenue =
    baselineBookings * PRICE_VND + incrementalBookings * DISCOUNTED_PRICE_VND;
  const incrementalOnlyCost = bookings * VARIABLE_COST_VND;
  return [
    {
      strategy: "blanket_5_percent_discount",
      off_peak_occupancy_rate: occupancy,
      booked_court_hours: round(bookings),
      incremental_booked_hours_vs_baseline: round(incrementalBookings),
      realized_revenue_vnd: round(blanketRevenue),
      contribution_vnd: round(blanketRevenue - blanketCost),
      contribution_change_vs_baseline_vnd: round(
        blanketRevenue - blanketCost - offPeak.contribution_vnd,
      ),
      contribution_change_vs_baseline_rate: round(
        (blanketRevenue - blanketCost) / offPeak.contribution_vnd - 1,
        6,
      ),
    },
    {
      strategy: "incremental_only_5_percent_offer",
      off_peak_occupancy_rate: occupancy,
      booked_court_hours: round(bookings),
      incremental_booked_hours_vs_baseline: round(incrementalBookings),
      realized_revenue_vnd: round(incrementalOnlyRevenue),
      contribution_vnd: round(incrementalOnlyRevenue - incrementalOnlyCost),
      contribution_change_vs_baseline_vnd: round(
        incrementalOnlyRevenue - incrementalOnlyCost - offPeak.contribution_vnd,
      ),
      contribution_change_vs_baseline_rate: round(
        (incrementalOnlyRevenue - incrementalOnlyCost) / offPeak.contribution_vnd - 1,
        6,
      ),
    },
  ];
});

const totalIncrementalHours = totalAvailable - totalBooked;
const campaignDiscounts = [
  { campaign: "campaign_1_5_to_20", point: "minimum", discount_rate: 0.05 },
  { campaign: "campaign_1_5_to_20", point: "midpoint", discount_rate: 0.125 },
  { campaign: "campaign_1_5_to_20", point: "maximum", discount_rate: 0.2 },
  { campaign: "campaign_2_10_to_30", point: "minimum", discount_rate: 0.1 },
  { campaign: "campaign_2_10_to_30", point: "midpoint", discount_rate: 0.2 },
  { campaign: "campaign_2_10_to_30", point: "maximum", discount_rate: 0.3 },
];

const fullOccupancyScenarios = campaignDiscounts.flatMap((campaign) => {
  const campaignPrice = PRICE_VND * (1 - campaign.discount_rate);
  const discountedContributionPerHour = campaignPrice - VARIABLE_COST_VND;
  const incrementalOnlyRevenue =
    totalBooked * PRICE_VND + totalIncrementalHours * campaignPrice;
  const fullVariableCost = totalAvailable * VARIABLE_COST_VND;
  const blanketRevenue = totalAvailable * campaignPrice;
  return [
    {
      campaign: campaign.campaign,
      range_point: campaign.point,
      discount_rate: campaign.discount_rate,
      discount_scope: "incremental_hours_only",
      target_occupancy_rate: 1,
      total_booked_hours: totalAvailable,
      incremental_booked_hours: totalIncrementalHours,
      realized_price_on_discounted_hours_vnd: campaignPrice,
      discounted_contribution_per_hour_vnd: discountedContributionPerHour,
      revenue_vnd: incrementalOnlyRevenue,
      contribution_vnd: incrementalOnlyRevenue - fullVariableCost,
      contribution_change_vs_baseline_vnd:
        incrementalOnlyRevenue - fullVariableCost - (totalRevenue - totalCost),
      contribution_change_vs_baseline_rate:
        (incrementalOnlyRevenue - fullVariableCost) / (totalRevenue - totalCost) - 1,
    },
    {
      campaign: campaign.campaign,
      range_point: campaign.point,
      discount_rate: campaign.discount_rate,
      discount_scope: "all_bookings_blanket",
      target_occupancy_rate: 1,
      total_booked_hours: totalAvailable,
      incremental_booked_hours: totalIncrementalHours,
      realized_price_on_discounted_hours_vnd: campaignPrice,
      discounted_contribution_per_hour_vnd: discountedContributionPerHour,
      revenue_vnd: blanketRevenue,
      contribution_vnd: blanketRevenue - fullVariableCost,
      contribution_change_vs_baseline_vnd:
        blanketRevenue - fullVariableCost - (totalRevenue - totalCost),
      contribution_change_vs_baseline_rate:
        (blanketRevenue - fullVariableCost) / (totalRevenue - totalCost) - 1,
    },
  ].map((row) =>
    Object.fromEntries(
      Object.entries(row).map(([key, value]) => [
        key,
        typeof value === "number" ? round(value, 6) : value,
      ]),
    ),
  );
});

const assumptions = [
  ["model_type", "synthetic", "Owner-provided operating assumptions, not observed booking records"],
  ["stadium_count", 1, "One stadium"],
  ["court_count", COURTS, "Interprets '10 venue' as 10 bookable courts"],
  ["model_period", "2026-06-01 to 2026-06-28", "Representative four-week period"],
  ["timezone", "Asia/Ho_Chi_Minh", "Local operating timezone"],
  ["opening_hours", "06:00-22:00", "Assumption; user did not provide opening hours"],
  ["slot_duration_hours", 1, "Matches quoted hourly price"],
  ["weekday_after_18_occupancy", 0.7, "Owner-provided"],
  ["weekend_after_16_occupancy", 1, "Owner-provided; overrides evening rule"],
  ["other_time_occupancy", 0.4, "Owner-provided"],
  ["full_price_vnd", PRICE_VND, "Owner-provided"],
  ["variable_cost_vnd", VARIABLE_COST_VND, "Owner-provided per booked court-hour"],
  ["minimum_shift_discount_rate", DISCOUNT_RATE, "Owner-provided"],
  ["discounted_price_vnd", DISCOUNTED_PRICE_VND, "Calculated"],
  ["target_occupancy_rate", 1, "Owner target; scenario target, not a forecast"],
  ["campaign_1_discount_range", "5%-20%", "Owner-approved"],
  ["campaign_2_discount_range", "10%-30%", "Owner-approved"],
  ["constraint_priority", "schedule > distance > price > partner", "Owner-provided ordinal ranking; no shares supplied"],
  ["sport_difference", "none_assumed", "Owner states pickleball and badminton are the same"],
  ["cancellation_no_show_input", "0% on 3 times of month, 20% of full price", "Ambiguous; excluded from financial calculations pending confirmation"],
  ["owner_commission_tolerance", "unknown", "Requires testing"],
  ["channel_fragmentation_burden", "unknown", "Requires workflow research"],
  ["liquidity_requirement", "unknown", "Requires pilot data"],
];

fs.writeFileSync(path.join(outputDir, "synthetic_court_hours.csv"), toCsv(slots));
fs.writeFileSync(path.join(outputDir, "monthly_summary.csv"), toCsv(summary));
fs.writeFileSync(path.join(outputDir, "discount_scenarios.csv"), toCsv(scenarios));
fs.writeFileSync(
  path.join(outputDir, "full_occupancy_campaigns.csv"),
  toCsv(fullOccupancyScenarios),
);
fs.writeFileSync(
  path.join(outputDir, "assumptions.csv"),
  "assumption,value,notes\n" +
    assumptions.map((row) => row.map(csvEscape).join(",")).join("\n") +
    "\n",
);

console.log(JSON.stringify({
  rows: slots.length,
  total_available_court_hours: totalAvailable,
  total_booked_court_hours: totalBooked,
  occupancy_rate: totalBooked / totalAvailable,
  revenue_vnd: totalRevenue,
  contribution_vnd: totalRevenue - totalCost,
  incremental_hours_to_full_occupancy: totalIncrementalHours,
  blanket_discount_break_even_occupancy: offPeak.occupancy_rate *
    ((PRICE_VND - VARIABLE_COST_VND) /
      (DISCOUNTED_PRICE_VND - VARIABLE_COST_VND)),
  blanket_full_occupancy_break_even_discount_rate:
    1 -
    ((totalRevenue - totalCost) / totalAvailable + VARIABLE_COST_VND) /
      PRICE_VND,
}, null, 2));
