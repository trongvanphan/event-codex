const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "AI Product Workshop";
pptx.subject = "Prototype pitch for maximizing profitable sports court occupancy";
pptx.title = "Fill Every Viable Court-Hour";
pptx.company = "AI Product Workshop";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Georgia",
  bodyFontFace: "Aptos",
  lang: "en-US",
};
pptx.defineLayout({ name: "CUSTOM_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "CUSTOM_WIDE";

const C = {
  green: "103B2D",
  green2: "1B5A43",
  green3: "2C7558",
  lime: "C7F05A",
  lime2: "E7F7B5",
  ivory: "F5F1E7",
  paper: "FFFDF8",
  charcoal: "17231D",
  gray: "637069",
  gray2: "A7B0AA",
  line: "D8DDD7",
  coral: "F36D4A",
  coral2: "F9D1C6",
  yellow: "F4C95D",
  white: "FFFFFF",
  paleGreen: "E4EEE8",
  paleGray: "EEF1EE",
};

const W = 13.333;
const H = 7.5;
const M = 0.62;

const SH = pptx.ShapeType;

function shadow(opacity = 0.12, blur = 2, offset = 1.5) {
  return { type: "outer", color: "000000", opacity, blur, offset, angle: 135 };
}

function addFooter(slide, num, dark = false, source = "Source: workshop discovery documents") {
  const color = dark ? "C6D3CC" : "7B857F";
  slide.addText(source, {
    x: M,
    y: 7.18,
    w: 8.8,
    h: 0.15,
    fontFace: "Aptos",
    fontSize: 7.5,
    color,
    margin: 0,
  });
  slide.addText(String(num).padStart(2, "0"), {
    x: 12.2,
    y: 7.12,
    w: 0.5,
    h: 0.2,
    fontFace: "Aptos",
    fontSize: 9,
    bold: true,
    color: dark ? C.lime : C.green,
    align: "right",
    margin: 0,
  });
}

function addEyebrow(slide, text, dark = false) {
  slide.addText(text.toUpperCase(), {
    x: M,
    y: 0.42,
    w: 4.5,
    h: 0.22,
    fontFace: "Aptos",
    fontSize: 9,
    bold: true,
    charSpacing: 1.8,
    color: dark ? C.lime : C.green3,
    margin: 0,
  });
}

function addTitle(slide, title, subtitle, dark = false, titleW = 11.8) {
  addEyebrow(slide, "Occupancy prototype", dark);
  slide.addText(title, {
    x: M,
    y: 0.76,
    w: titleW,
    h: 0.72,
    fontFace: "Georgia",
    fontSize: 27,
    bold: true,
    color: dark ? C.white : C.charcoal,
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: M,
      y: 1.55,
      w: 11.7,
      h: 0.48,
      fontFace: "Aptos",
      fontSize: 13,
      color: dark ? "D7E1DC" : C.gray,
      margin: 0,
      breakLine: false,
      fit: "shrink",
    });
  }
}

function addPill(slide, text, x, y, w, fill, color, opts = {}) {
  slide.addShape(SH.roundRect, {
    x,
    y,
    w,
    h: opts.h || 0.36,
    rectRadius: 0.08,
    fill: { color: fill },
    line: { color: fill },
  });
  slide.addText(text, {
    x: x + 0.08,
    y: y + 0.04,
    w: w - 0.16,
    h: (opts.h || 0.36) - 0.08,
    fontFace: "Aptos",
    fontSize: opts.fontSize || 9,
    bold: opts.bold !== false,
    color,
    align: opts.align || "center",
    valign: "mid",
    margin: 0,
    fit: "shrink",
  });
}

function addCard(slide, x, y, w, h, opts = {}) {
  slide.addShape(SH.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.12,
    fill: { color: opts.fill || C.paper },
    line: { color: opts.line || C.line, width: opts.lineWidth || 0.8 },
    shadow: opts.shadow === false ? undefined : shadow(opts.shadowOpacity || 0.08, 1.5, 1),
  });
}

function addBulletList(slide, items, x, y, w, h, opts = {}) {
  const runs = items.map((text, i) => ({
    text,
    options: {
      bullet: { indent: opts.indent || 14 },
      hanging: opts.hanging || 3,
      breakLine: i !== items.length - 1,
      paraSpaceAfterPt: opts.paraSpaceAfterPt || 8,
    },
  }));
  slide.addText(runs, {
    x,
    y,
    w,
    h,
    fontFace: "Aptos",
    fontSize: opts.fontSize || 12,
    color: opts.color || C.charcoal,
    margin: 0,
    valign: "top",
    breakLine: false,
    fit: "shrink",
  });
}

function addCourtLines(slide, color = C.white, transparency = 78) {
  slide.addShape(SH.rect, {
    x: 9.28,
    y: 0,
    w: 4.05,
    h: 7.5,
    fill: { color, transparency: 100 },
    line: { color, transparency: 100 },
  });
  const line = { color, width: 1.2, transparency };
  slide.addShape(SH.line, { x: 9.65, y: 0.7, w: 0, h: 6.1, line });
  slide.addShape(SH.line, { x: 12.65, y: 0.7, w: 0, h: 6.1, line });
  slide.addShape(SH.line, { x: 9.65, y: 0.7, w: 3, h: 0, line });
  slide.addShape(SH.line, { x: 9.65, y: 6.8, w: 3, h: 0, line });
  slide.addShape(SH.line, { x: 11.15, y: 0.7, w: 0, h: 6.1, line });
  slide.addShape(SH.line, { x: 9.65, y: 3.75, w: 3, h: 0, line });
  slide.addShape(SH.line, { x: 9.65, y: 2.2, w: 3, h: 0, line });
  slide.addShape(SH.line, { x: 9.65, y: 5.3, w: 3, h: 0, line });
}

function addMiniHeatmap(slide, x, y, cellW, cellH, opts = {}) {
  const rows = [
    [0, 0, 1, 1, 1, 2, 2],
    [0, 1, 1, 1, 2, 2, 2],
    [0, 0, 1, 1, 1, 2, 2],
    [0, 0, 0, 1, 1, 2, 2],
    [0, 0, 0, 1, 2, 2, 2],
  ];
  const fills = opts.fills || [C.paleGreen, C.green3, C.lime];
  rows.forEach((row, r) => {
    row.forEach((v, c) => {
      slide.addShape(SH.roundRect, {
        x: x + c * (cellW + 0.06),
        y: y + r * (cellH + 0.07),
        w: cellW,
        h: cellH,
        rectRadius: 0.04,
        fill: { color: fills[v] },
        line: { color: fills[v] },
      });
    });
  });
}

function addPhone(slide, x, y, w, h, screenBuilder) {
  slide.addShape(SH.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.22,
    fill: { color: C.charcoal },
    line: { color: "0B1711", width: 1.2 },
    shadow: shadow(0.18, 3, 1.5),
  });
  slide.addShape(SH.roundRect, {
    x: x + 0.09,
    y: y + 0.11,
    w: w - 0.18,
    h: h - 0.22,
    rectRadius: 0.17,
    fill: { color: C.ivory },
    line: { color: C.ivory },
  });
  slide.addShape(SH.roundRect, {
    x: x + w * 0.38,
    y: y + 0.08,
    w: w * 0.24,
    h: 0.08,
    rectRadius: 0.03,
    fill: { color: C.charcoal },
    line: { color: C.charcoal },
  });
  screenBuilder(slide, x + 0.18, y + 0.28, w - 0.36, h - 0.52);
}

function addSmallLabel(slide, text, x, y, w, color = C.gray) {
  slide.addText(text.toUpperCase(), {
    x,
    y,
    w,
    h: 0.16,
    fontFace: "Aptos",
    fontSize: 7.5,
    bold: true,
    charSpacing: 1.1,
    color,
    margin: 0,
    fit: "shrink",
  });
}

// Slide 1
{
  const slide = pptx.addSlide();
  slide.background = { color: C.green };
  addCourtLines(slide);

  addPill(slide, "PROTOTYPE PITCH", M, 0.55, 1.58, C.lime, C.green, { fontSize: 8.5 });
  slide.addText("Fill Every\nViable Court-Hour", {
    x: M,
    y: 1.28,
    w: 7.6,
    h: 1.92,
    fontFace: "Georgia",
    fontSize: 43,
    bold: true,
    color: C.white,
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
  slide.addText("Maximize profitable occupancy by matching flexible players with off-peak and last-minute inventory.", {
    x: M,
    y: 3.48,
    w: 6.75,
    h: 0.82,
    fontFace: "Aptos",
    fontSize: 18,
    color: "DCE7E1",
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });

  const metricY = 5.12;
  [
    ["51.79%", "baseline occupancy"],
    ["1,920", "unused off-peak hours"],
    ["4 weeks", "synthetic model"],
  ].forEach(([value, label], i) => {
    const x = M + i * 2.15;
    slide.addText(value, {
      x,
      y: metricY,
      w: 1.9,
      h: 0.48,
      fontFace: "Georgia",
      fontSize: 24,
      bold: true,
      color: i === 1 ? C.lime : C.white,
      margin: 0,
      align: "left",
    });
    slide.addText(label, {
      x,
      y: metricY + 0.52,
      w: 1.9,
      h: 0.32,
      fontFace: "Aptos",
      fontSize: 9.5,
      color: "B8C9C0",
      margin: 0,
      fit: "shrink",
    });
  });

  addMiniHeatmap(slide, 9.83, 1.18, 0.31, 0.48, {
    fills: ["315E4C", "6C9A74", C.lime],
  });
  slide.addText("Court demand, made visible", {
    x: 9.82,
    y: 4.42,
    w: 2.8,
    h: 0.34,
    fontFace: "Georgia",
    fontSize: 15,
    bold: true,
    color: C.white,
    margin: 0,
    align: "center",
  });
  slide.addText("Protect peak pricing. Activate underused inventory.", {
    x: 9.82,
    y: 4.9,
    w: 2.8,
    h: 0.55,
    fontFace: "Aptos",
    fontSize: 11,
    color: "CBD8D1",
    margin: 0,
    align: "center",
    fit: "shrink",
  });
  addFooter(slide, 1, true, "Source: 01_design_thinking.md; synthetic occupancy model");
}

// Slide 2
{
  const slide = pptx.addSlide();
  slide.background = { color: C.ivory };
  addTitle(
    slide,
    "Players Are Searching While Courts Sit Empty",
    "Today’s booking experience fragments demand across chats, calls, screenshots and manual schedules."
  );

  addCard(slide, 0.62, 2.15, 4.0, 4.42, { fill: C.paper });
  addPill(slide, "PLAYER SIDE", 0.9, 2.43, 1.25, C.green, C.white, { fontSize: 8 });
  slide.addText("High intent,\nhigh friction", {
    x: 0.9,
    y: 3.02,
    w: 2.5,
    h: 0.82,
    fontFace: "Georgia",
    fontSize: 23,
    bold: true,
    color: C.charcoal,
    margin: 0,
  });
  addBulletList(
    slide,
    [
      "Message venues one by one",
      "Compare screenshots and prices",
      "Negotiate time with the group",
      "Collect money and replace players",
    ],
    0.94,
    4.05,
    3.25,
    1.78,
    { fontSize: 11.5, paraSpaceAfterPt: 6 }
  );
  slide.addText("Demand exists, but it is hard to convert.", {
    x: 0.9,
    y: 6.0,
    w: 3.2,
    h: 0.32,
    fontFace: "Aptos",
    fontSize: 11,
    italic: true,
    bold: true,
    color: C.coral,
    margin: 0,
  });

  addCard(slide, 8.72, 2.15, 4.0, 4.42, { fill: C.green, line: C.green });
  addPill(slide, "VENUE SIDE", 9.0, 2.43, 1.25, C.lime, C.green, { fontSize: 8 });
  slide.addText("Perishable\ninventory", {
    x: 9.0,
    y: 3.02,
    w: 2.6,
    h: 0.82,
    fontFace: "Georgia",
    fontSize: 23,
    bold: true,
    color: C.white,
    margin: 0,
  });
  addBulletList(
    slide,
    [
      "Schedules live in calls, chats and sheets",
      "Peak hours sell; off-peak hours expire",
      "Cancelled slots are hard to refill",
      "Informal discounts are not measurable",
    ],
    9.04,
    4.05,
    3.16,
    1.78,
    { fontSize: 11.3, color: "E0E9E4", paraSpaceAfterPt: 6 }
  );
  slide.addText("Supply exists, but it is hard to activate.", {
    x: 9.0,
    y: 6.0,
    w: 3.15,
    h: 0.32,
    fontFace: "Aptos",
    fontSize: 11,
    italic: true,
    bold: true,
    color: C.lime,
    margin: 0,
  });

  slide.addShape(SH.line, {
    x: 4.95,
    y: 3.95,
    w: 3.36,
    h: 0,
    line: { color: C.gray2, width: 1.4, dash: "dash", beginArrowType: "none", endArrowType: "triangle" },
  });
  slide.addShape(SH.line, {
    x: 8.31,
    y: 4.82,
    w: -3.36,
    h: 0,
    line: { color: C.gray2, width: 1.4, dash: "dash", beginArrowType: "none", endArrowType: "triangle" },
  });
  slide.addShape(SH.ellipse, {
    x: 5.37,
    y: 3.52,
    w: 2.56,
    h: 1.72,
    fill: { color: C.coral },
    line: { color: C.coral },
    shadow: shadow(0.12, 2, 1),
  });
  slide.addText("MISSED\nMATCH", {
    x: 5.69,
    y: 3.94,
    w: 1.92,
    h: 0.66,
    fontFace: "Aptos",
    fontSize: 16,
    bold: true,
    color: C.white,
    align: "center",
    valign: "mid",
    margin: 0,
  });
  addFooter(slide, 2, false, "Source: 01_design_thinking.md — Empathize & current workarounds");
}

// Slide 3
{
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  addTitle(
    slide,
    "Supply and Demand Fail to Meet at the Right Time",
    "The missing layer coordinates schedule, location, price, quality and group readiness."
  );

  addCard(slide, 0.62, 2.18, 3.35, 3.88, { fill: C.ivory, shadow: false });
  addPill(slide, "PLAYER PAIN", 0.93, 2.48, 1.3, C.coral2, C.coral, { fontSize: 8 });
  addBulletList(
    slide,
    [
      "Real-time availability is slow to find",
      "Preferred peak slots are often full",
      "Alternatives are hard to compare",
      "Hidden fees weaken trust",
      "The group may still fall apart",
    ],
    0.94,
    3.12,
    2.65,
    2.35,
    { fontSize: 11.3, paraSpaceAfterPt: 8 }
  );

  addCard(slide, 9.36, 2.18, 3.35, 3.88, { fill: C.paleGreen, shadow: false });
  addPill(slide, "OWNER PAIN", 9.67, 2.48, 1.3, C.green, C.white, { fontSize: 8 });
  addBulletList(
    slide,
    [
      "Off-peak inventory expires unsold",
      "Inventory is fragmented",
      "Demand data is unreliable",
      "Blanket discounts cannibalize revenue",
      "Incremental lift is hard to prove",
    ],
    9.68,
    3.12,
    2.64,
    2.35,
    { fontSize: 11.3, paraSpaceAfterPt: 8 }
  );

  slide.addShape(SH.line, {
    x: 3.98,
    y: 4.12,
    w: 1.34,
    h: 0,
    line: { color: C.gray2, width: 2, endArrowType: "triangle" },
  });
  slide.addShape(SH.line, {
    x: 9.35,
    y: 4.12,
    w: -1.34,
    h: 0,
    line: { color: C.gray2, width: 2, endArrowType: "triangle" },
  });
  slide.addShape(SH.ellipse, {
    x: 5.14,
    y: 2.72,
    w: 3.05,
    h: 2.85,
    fill: { color: C.green },
    line: { color: C.green },
    shadow: shadow(0.15, 3, 1),
  });
  slide.addText("DEMAND\nORCHESTRATION", {
    x: 5.32,
    y: 3.5,
    w: 2.68,
    h: 0.72,
    fontFace: "Georgia",
    fontSize: 16.5,
    bold: true,
    color: C.white,
    align: "center",
    valign: "mid",
    margin: 0,
    fit: "shrink",
  });
  addPill(slide, "TIME", 5.48, 4.6, 0.72, C.lime, C.green, { fontSize: 7 });
  addPill(slide, "PLACE", 6.29, 4.6, 0.72, C.lime, C.green, { fontSize: 7 });
  addPill(slide, "VALUE", 7.1, 4.6, 0.72, C.lime, C.green, { fontSize: 7 });

  slide.addText("Not a coupon app. A coordination layer for expiring inventory.", {
    x: 3.63,
    y: 6.34,
    w: 6.1,
    h: 0.38,
    fontFace: "Georgia",
    fontSize: 16,
    bold: true,
    italic: true,
    color: C.coral,
    align: "center",
    margin: 0,
  });
  addFooter(slide, 3, false, "Source: 01_design_thinking.md — Define & winning concept");
}

// Slide 4
{
  const slide = pptx.addSlide();
  slide.background = { color: C.green };
  addTitle(
    slide,
    "Every Empty Court-Hour Is Revenue That Disappears",
    "Occupancy matters only when the bookings are incremental and contribution-positive.",
    true
  );

  const stats = [
    { value: "4,480", label: "available court-hours", color: C.white },
    { value: "2,320", label: "booked court-hours", color: C.lime },
    { value: "1,920", label: "unused off-peak hours", color: C.coral },
  ];
  stats.forEach((s, i) => {
    const x = 0.65 + i * 2.62;
    slide.addText(s.value, {
      x,
      y: 2.3,
      w: 2.32,
      h: 0.58,
      fontFace: "Georgia",
      fontSize: 30,
      bold: true,
      color: s.color,
      margin: 0,
    });
    slide.addText(s.label, {
      x,
      y: 2.94,
      w: 2.32,
      h: 0.3,
      fontFace: "Aptos",
      fontSize: 10.5,
      color: "C8D5CE",
      margin: 0,
      fit: "shrink",
    });
  });

  const chartLeft = 1.1;
  const chartTop = 3.76;
  const chartW = 6.2;
  const chartH = 1.84;
  [0, 20, 40, 60, 80, 100].forEach((value) => {
    const yy = chartTop + chartH - (value / 100) * chartH;
    slide.addShape(SH.line, {
      x: chartLeft,
      y: yy,
      w: chartW,
      h: 0,
      line: { color: value === 0 ? "9FB4AA" : "386553", width: value === 0 ? 1 : 0.55 },
    });
    slide.addText(String(value), {
      x: 0.73,
      y: yy - 0.08,
      w: 0.28,
      h: 0.16,
      fontFace: "Aptos",
      fontSize: 7.5,
      color: "A9BBB1",
      align: "right",
      margin: 0,
    });
  });
  const barGroups = [
    { x: 1.78, label: "Peak", booked: 80, unused: 20 },
    { x: 4.85, label: "Off-peak", booked: 40, unused: 60 },
  ];
  barGroups.forEach((group) => {
    const bookedH = (group.booked / 100) * chartH;
    const unusedH = (group.unused / 100) * chartH;
    slide.addShape(SH.rect, {
      x: group.x,
      y: chartTop + chartH - bookedH,
      w: 0.88,
      h: bookedH,
      fill: { color: C.lime },
      line: { color: C.lime },
    });
    slide.addShape(SH.rect, {
      x: group.x + 0.88,
      y: chartTop + chartH - unusedH,
      w: 0.88,
      h: unusedH,
      fill: { color: "648777" },
      line: { color: "648777" },
    });
    slide.addText(group.label, {
      x: group.x - 0.05,
      y: chartTop + chartH + 0.16,
      w: 1.86,
      h: 0.24,
      fontFace: "Aptos",
      fontSize: 11,
      color: "DCE5E0",
      align: "center",
      margin: 0,
    });
  });
  slide.addShape(SH.rect, {
    x: 3.1,
    y: 6.12,
    w: 0.12,
    h: 0.12,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText("Booked", {
    x: 3.28,
    y: 6.09,
    w: 0.58,
    h: 0.18,
    fontFace: "Aptos",
    fontSize: 8.5,
    color: "DCE5E0",
    margin: 0,
  });
  slide.addShape(SH.rect, {
    x: 3.95,
    y: 6.12,
    w: 0.12,
    h: 0.12,
    fill: { color: "648777" },
    line: { color: "648777" },
  });
  slide.addText("Unused", {
    x: 4.13,
    y: 6.09,
    w: 0.6,
    h: 0.18,
    fontFace: "Aptos",
    fontSize: 8.5,
    color: "DCE5E0",
    margin: 0,
  });

  addCard(slide, 8.22, 2.25, 4.43, 4.05, { fill: "174A38", line: "315F4D", shadow: false });
  addPill(slide, "BUSINESS RULE", 8.58, 2.58, 1.38, C.lime, C.green, { fontSize: 8 });
  slide.addText("Maximize profitable occupancy", {
    x: 8.58,
    y: 3.2,
    w: 3.38,
    h: 0.72,
    fontFace: "Georgia",
    fontSize: 23,
    bold: true,
    color: C.white,
    margin: 0,
    fit: "shrink",
  });
  addBulletList(
    slide,
    [
      "Protect naturally full peak periods",
      "Create new off-peak demand",
      "Refill cancellations before expiry",
      "Measure contribution after incentives",
    ],
    8.62,
    4.2,
    3.25,
    1.45,
    { fontSize: 11.5, color: "DDE8E2", paraSpaceAfterPt: 7 }
  );
  slide.addText("Weekend demand after 16:00 is already modeled at 100%.", {
    x: 8.58,
    y: 5.84,
    w: 3.35,
    h: 0.3,
    fontFace: "Aptos",
    fontSize: 9.5,
    bold: true,
    color: C.coral,
    margin: 0,
    fit: "shrink",
  });
  addFooter(slide, 4, true, "Source: 08_pitch_deck_outline.md; data/monthly_summary.csv");
}

// Slide 5
{
  const slide = pptx.addSlide();
  slide.background = { color: C.ivory };
  addTitle(
    slide,
    "Flexibility Exists When the Trade-Off Is Clear",
    "Players will shift demand when relevance, savings and trust outweigh the inconvenience."
  );

  addCard(slide, 0.62, 2.17, 3.38, 4.42, { fill: C.green, line: C.green });
  slide.addShape(SH.ellipse, {
    x: 0.96,
    y: 2.52,
    w: 0.72,
    h: 0.72,
    fill: { color: C.lime },
    line: { color: C.lime },
  });
  slide.addText("M", {
    x: 1.14,
    y: 2.69,
    w: 0.36,
    h: 0.28,
    fontFace: "Georgia",
    fontSize: 17,
    bold: true,
    color: C.green,
    align: "center",
    margin: 0,
  });
  slide.addText("Minh, 31", {
    x: 1.92,
    y: 2.56,
    w: 1.5,
    h: 0.3,
    fontFace: "Georgia",
    fontSize: 16,
    bold: true,
    color: C.white,
    margin: 0,
  });
  slide.addText("Convenience-first organizer", {
    x: 1.92,
    y: 2.92,
    w: 1.6,
    h: 0.24,
    fontFace: "Aptos",
    fontSize: 9.5,
    color: "C9D8D0",
    margin: 0,
  });
  slide.addText("“Help me confirm a reliable court before the group loses interest.”", {
    x: 0.96,
    y: 3.58,
    w: 2.7,
    h: 0.82,
    fontFace: "Georgia",
    fontSize: 17,
    italic: true,
    color: C.lime,
    margin: 0,
    fit: "shrink",
  });
  addSmallLabel(slide, "What matters", 0.96, 4.72, 1.8, "AFC4B8");
  addBulletList(
    slide,
    ["Certainty", "Proximity", "Clear final price", "Fast group decision"],
    0.98,
    5.06,
    2.25,
    1.12,
    { fontSize: 10.8, color: C.white, paraSpaceAfterPt: 4 }
  );

  slide.addText("Preferred choice", {
    x: 4.58,
    y: 2.35,
    w: 2.5,
    h: 0.28,
    fontFace: "Aptos",
    fontSize: 10,
    bold: true,
    color: C.gray,
    margin: 0,
  });
  addCard(slide, 4.52, 2.75, 3.38, 2.05, { fill: C.paper });
  addPill(slide, "BEST MATCH", 4.82, 3.06, 1.08, C.paleGray, C.green, { fontSize: 7.5 });
  slide.addText("18:00 · Usual venue", {
    x: 4.82,
    y: 3.58,
    w: 2.2,
    h: 0.32,
    fontFace: "Georgia",
    fontSize: 17,
    bold: true,
    color: C.charcoal,
    margin: 0,
  });
  slide.addText("8 min away  |  120,000 VND", {
    x: 4.82,
    y: 4.04,
    w: 2.35,
    h: 0.25,
    fontFace: "Aptos",
    fontSize: 10.5,
    color: C.gray,
    margin: 0,
  });

  slide.addText("Recommended alternative", {
    x: 8.42,
    y: 2.35,
    w: 2.7,
    h: 0.28,
    fontFace: "Aptos",
    fontSize: 10,
    bold: true,
    color: C.gray,
    margin: 0,
  });
  addCard(slide, 8.36, 2.75, 4.35, 2.05, { fill: C.lime2, line: C.lime });
  addPill(slide, "BEST VALUE", 8.66, 3.06, 1.08, C.green, C.white, { fontSize: 7.5 });
  slide.addText("17:00 · Same area", {
    x: 8.66,
    y: 3.58,
    w: 2.2,
    h: 0.32,
    fontFace: "Georgia",
    fontSize: 17,
    bold: true,
    color: C.charcoal,
    margin: 0,
  });
  slide.addText("8 min away  |  Save 40,000 VND", {
    x: 8.66,
    y: 4.04,
    w: 2.85,
    h: 0.25,
    fontFace: "Aptos",
    fontSize: 10.5,
    bold: true,
    color: C.green,
    margin: 0,
  });

  slide.addShape(SH.line, {
    x: 7.92,
    y: 3.78,
    w: 0.42,
    h: 0,
    line: { color: C.coral, width: 2.2, endArrowType: "triangle" },
  });
  slide.addText("CLEAR TRADE-OFF", {
    x: 7.29,
    y: 4.22,
    w: 1.7,
    h: 0.2,
    fontFace: "Aptos",
    fontSize: 7.5,
    bold: true,
    color: C.coral,
    charSpacing: 1,
    align: "center",
    margin: 0,
  });

  addCard(slide, 4.52, 5.22, 8.19, 1.36, { fill: C.paper, shadow: false });
  const insights = [
    ["BEHAVIOR", "Use stated flexibility, not demographic stereotypes."],
    ["TRUST", "Explain why every recommendation appears."],
    ["CONTROL", "Give owners floors, caps and eligible periods."],
  ];
  insights.forEach(([label, text], i) => {
    const x = 4.84 + i * 2.56;
    addSmallLabel(slide, label, x, 5.52, 1.2, i === 1 ? C.coral : C.green3);
    slide.addText(text, {
      x,
      y: 5.87,
      w: 2.18,
      h: 0.48,
      fontFace: "Aptos",
      fontSize: 10.2,
      color: C.charcoal,
      margin: 0,
      fit: "shrink",
    });
  });
  addFooter(slide, 5, false, "Source: 02_personas.md; 01_design_thinking.md — user insights");
}

// Slide 6
{
  const slide = pptx.addSlide();
  slide.background = { color: C.paper };
  addTitle(
    slide,
    "Test Whether Transparent Alternatives Can Shift Demand",
    "A focused mobile prototype isolates the riskiest assumption before the full platform is built."
  );

  addCard(slide, 0.62, 2.17, 3.07, 4.47, { fill: C.green, line: C.green });
  addPill(slide, "CORE HYPOTHESIS", 0.93, 2.5, 1.42, C.lime, C.green, { fontSize: 8 });
  slide.addText("Will players accept a different court-hour when the trade-off is relevant and transparent?", {
    x: 0.93,
    y: 3.18,
    w: 2.38,
    h: 1.55,
    fontFace: "Georgia",
    fontSize: 18.5,
    bold: true,
    color: C.white,
    margin: 0,
    fit: "shrink",
  });
  slide.addText("Schedule · travel · quality · savings", {
    x: 0.93,
    y: 5.07,
    w: 2.3,
    h: 0.3,
    fontFace: "Aptos",
    fontSize: 10.5,
    bold: true,
    color: C.lime,
    margin: 0,
  });
  slide.addText("Mid-fidelity, clickable, player-side only", {
    x: 0.93,
    y: 5.73,
    w: 2.3,
    h: 0.42,
    fontFace: "Aptos",
    fontSize: 10.5,
    color: "CFDDD6",
    margin: 0,
    fit: "shrink",
  });

  addPhone(slide, 4.23, 2.46, 2.35, 3.92, (s, x, y, w, h) => {
    addSmallLabel(s, "Find a court", x + 0.08, y + 0.03, w - 0.16, C.green3);
    s.addText("Badminton", {
      x: x + 0.08, y: y + 0.38, w: w - 0.16, h: 0.28,
      fontFace: "Georgia", fontSize: 15, bold: true, color: C.charcoal, margin: 0,
    });
    [["Tomorrow", "DATE"], ["18:00", "TIME"], ["Near work", "AREA"]].forEach(([v, l], i) => {
      const yy = y + 0.88 + i * 0.58;
      s.addShape(SH.roundRect, {
        x: x + 0.08, y: yy, w: w - 0.16, h: 0.43, rectRadius: 0.06,
        fill: { color: C.white }, line: { color: C.line },
      });
      s.addText(l, {
        x: x + 0.18, y: yy + 0.08, w: 0.55, h: 0.14,
        fontFace: "Aptos", fontSize: 6.5, bold: true, color: C.gray2, margin: 0,
      });
      s.addText(v, {
        x: x + 0.76, y: yy + 0.08, w: w - 1.0, h: 0.18,
        fontFace: "Aptos", fontSize: 9.5, bold: true, color: C.charcoal, margin: 0,
      });
    });
    addPill(s, "SEARCH", x + 0.08, y + h - 0.5, w - 0.16, C.green, C.white, { h: 0.4, fontSize: 8.5 });
  });

  addPhone(slide, 7.05, 2.46, 2.35, 3.92, (s, x, y, w, h) => {
    addSmallLabel(s, "Ranked options", x + 0.08, y + 0.03, w - 0.16, C.green3);
    s.addText("Best for you", {
      x: x + 0.08, y: y + 0.36, w: w - 0.16, h: 0.28,
      fontFace: "Georgia", fontSize: 15, bold: true, color: C.charcoal, margin: 0,
    });
    const cards = [
      ["BEST MATCH", "18:00", "120k", C.white, C.paleGray],
      ["BEST VALUE", "17:00", "Save 40k", C.lime2, C.lime],
    ];
    cards.forEach((c, i) => {
      const yy = y + 0.9 + i * 1.12;
      s.addShape(SH.roundRect, {
        x: x + 0.08, y: yy, w: w - 0.16, h: 0.9, rectRadius: 0.08,
        fill: { color: c[3] }, line: { color: c[4] },
      });
      s.addText(c[0], {
        x: x + 0.2, y: yy + 0.12, w: 0.85, h: 0.14,
        fontFace: "Aptos", fontSize: 6.5, bold: true, color: C.green3, margin: 0,
      });
      s.addText(c[1], {
        x: x + 0.2, y: yy + 0.37, w: 0.7, h: 0.24,
        fontFace: "Georgia", fontSize: 14, bold: true, color: C.charcoal, margin: 0,
      });
      s.addText(c[2], {
        x: x + 1.05, y: yy + 0.39, w: 0.8, h: 0.2,
        fontFace: "Aptos", fontSize: 8.5, bold: true, color: i === 1 ? C.coral : C.gray, align: "right", margin: 0,
      });
    });
    addPill(s, "WHY RECOMMENDED?", x + 0.08, y + h - 0.5, w - 0.16, C.green, C.white, { h: 0.4, fontSize: 7.5 });
  });

  addPhone(slide, 9.87, 2.46, 2.35, 3.92, (s, x, y, w, h) => {
    addSmallLabel(s, "Transparent reason", x + 0.08, y + 0.03, w - 0.16, C.green3);
    s.addText("Why this option?", {
      x: x + 0.08, y: y + 0.36, w: w - 0.16, h: 0.28,
      fontFace: "Georgia", fontSize: 14.5, bold: true, color: C.charcoal, margin: 0,
    });
    s.addShape(SH.ellipse, {
      x: x + 0.62, y: y + 0.92, w: 0.72, h: 0.72,
      fill: { color: C.lime }, line: { color: C.lime },
    });
    s.addText("−40k", {
      x: x + 0.72, y: y + 1.14, w: 0.52, h: 0.2,
      fontFace: "Aptos", fontSize: 10, bold: true, color: C.green, align: "center", margin: 0,
    });
    addBulletList(
      s,
      ["Within your flexible start time", "Eight minutes from work", "Same published offer for eligible users"],
      x + 0.14,
      y + 1.92,
      w - 0.28,
      1.18,
      { fontSize: 8.5, paraSpaceAfterPt: 5, indent: 10 }
    );
    addPill(s, "SELECT 17:00", x + 0.08, y + h - 0.5, w - 0.16, C.green, C.white, { h: 0.4, fontSize: 8 });
  });

  ["SEARCH", "COMPARE", "UNDERSTAND"].forEach((t, i) => {
    slide.addText(t, {
      x: 4.23 + i * 2.82,
      y: 6.63,
      w: 2.35,
      h: 0.22,
      fontFace: "Aptos",
      fontSize: 8,
      bold: true,
      charSpacing: 1.3,
      color: i === 1 ? C.coral : C.green3,
      align: "center",
      margin: 0,
    });
  });
  addFooter(slide, 6, false, "Source: 07_prototype_plan.md; prototype scope is intentionally bounded");
}

// Slide 7
{
  const slide = pptx.addSlide();
  slide.background = { color: C.ivory };
  addTitle(
    slide,
    "From Preferred Slot to Occupancy-Creating Alternative",
    "Demo scenario: four players want badminton near work tomorrow at 18:00."
  );

  const steps = [
    ["01", "Browse", "Sport, area,\ndate, time"],
    ["02", "Flex", "Earlier or\nlater"],
    ["03", "Review", "Match +\nbest value"],
    ["04", "Compare", "Time, travel,\nquality, price"],
    ["05", "Explain", "Why this\noption?"],
    ["06", "Choose", "Original or\nalternative"],
    ["07", "Learn", "Reason +\ntrust"],
  ];
  const startX = 0.7;
  const gap = 0.12;
  const cardW = 1.7;
  steps.forEach((step, i) => {
    const x = startX + i * (cardW + gap);
    const active = i === 4 || i === 5;
    addCard(slide, x, 2.42, cardW, 2.15, {
      fill: active ? C.green : C.paper,
      line: active ? C.green : C.line,
      shadowOpacity: active ? 0.14 : 0.06,
    });
    addPill(slide, step[0], x + 0.18, 2.66, 0.52, active ? C.lime : C.paleGreen, C.green, { fontSize: 8 });
    slide.addText(step[1], {
      x: x + 0.18,
      y: 3.22,
      w: 1.25,
      h: 0.3,
      fontFace: "Georgia",
      fontSize: 16,
      bold: true,
      color: active ? C.white : C.charcoal,
      margin: 0,
    });
    slide.addText(step[2], {
      x: x + 0.18,
      y: 3.72,
      w: 1.28,
      h: 0.48,
      fontFace: "Aptos",
      fontSize: 9.5,
      color: active ? "D7E4DD" : C.gray,
      margin: 0,
      fit: "shrink",
    });
    if (i < steps.length - 1) {
      slide.addShape(SH.line, {
        x: x + cardW,
        y: 3.48,
        w: gap,
        h: 0,
        line: { color: C.gray2, width: 1.2, endArrowType: "triangle" },
      });
    }
  });

  addCard(slide, 1.07, 5.13, 11.18, 1.24, { fill: C.green, line: C.green, shadow: false });
  addPill(slide, "RECOMMENDATION", 1.36, 5.45, 1.38, C.lime, C.green, { fontSize: 7.5 });
  slide.addText("Save 40,000 VND by starting at 17:00 instead of 18:00.", {
    x: 3.0,
    y: 5.37,
    w: 5.15,
    h: 0.32,
    fontFace: "Georgia",
    fontSize: 17,
    bold: true,
    color: C.white,
    margin: 0,
    fit: "shrink",
  });
  slide.addText("Eight minutes away · matches selected flexibility", {
    x: 3.0,
    y: 5.85,
    w: 4.2,
    h: 0.22,
    fontFace: "Aptos",
    fontSize: 10.5,
    color: "C8D8D0",
    margin: 0,
  });
  slide.addShape(SH.line, {
    x: 8.65,
    y: 5.76,
    w: 0.72,
    h: 0,
    line: { color: C.lime, width: 2.2, endArrowType: "triangle" },
  });
  addPill(slide, "OFF-PEAK SLOT FILLED", 9.57, 5.49, 2.25, C.coral, C.white, { h: 0.52, fontSize: 9 });
  addFooter(slide, 7, false, "Source: 07_prototype_plan.md — player test path and prototype copy");
}

// Slide 8
{
  const slide = pptx.addSlide();
  slide.background = { color: C.green };
  addTitle(
    slide,
    "Validate Demand Shifting Before Building the Platform",
    "A controlled prototype and venue pilot turn the occupancy thesis into measurable evidence.",
    true
  );

  addCard(slide, 0.64, 2.15, 4.0, 2.12, { fill: "174A38", line: "315F4D", shadow: false });
  addPill(slide, "PLAYER VALUE", 0.95, 2.45, 1.18, C.lime, C.green, { fontSize: 8 });
  addBulletList(
    slide,
    [
      "Find a suitable court in under 60 seconds",
      "See the final price and trade-off clearly",
      "Spend less time calling and coordinating",
    ],
    0.96,
    3.03,
    3.15,
    0.9,
    { fontSize: 11, color: C.white, paraSpaceAfterPt: 6 }
  );

  addCard(slide, 4.86, 2.15, 4.0, 2.12, { fill: "174A38", line: "315F4D", shadow: false });
  addPill(slide, "VENUE VALUE", 5.17, 2.45, 1.18, C.lime, C.green, { fontSize: 8 });
  addBulletList(
    slide,
    [
      "Lift incremental off-peak occupancy",
      "Refill cancelled inventory",
      "Protect peak price and contribution",
    ],
    5.18,
    3.03,
    3.15,
    0.9,
    { fontSize: 11, color: C.white, paraSpaceAfterPt: 6 }
  );

  addCard(slide, 9.08, 2.15, 3.6, 2.12, { fill: C.lime, line: C.lime, shadow: false });
  addSmallLabel(slide, "SUCCESS SIGNALS", 9.42, 2.46, 1.8, C.green);
  const signals = [
    ["80%", "complete unaided"],
    ["<60s", "to selected slot"],
    ["40%", "consider alternative"],
  ];
  signals.forEach((s, i) => {
    const x = 9.42 + i * 1.0;
    slide.addText(s[0], {
      x,
      y: 2.94,
      w: 0.82,
      h: 0.38,
      fontFace: "Georgia",
      fontSize: 20,
      bold: true,
      color: C.green,
      margin: 0,
      align: "left",
    });
    slide.addText(s[1], {
      x,
      y: 3.42,
      w: 0.86,
      h: 0.42,
      fontFace: "Aptos",
      fontSize: 8.4,
      color: C.green2,
      margin: 0,
      fit: "shrink",
    });
  });

  addSmallLabel(slide, "VALIDATION ROADMAP", 0.68, 4.85, 2.1, C.lime);
  const phases = [
    ["1", "Prototype", "2 scenarios\n13 players"],
    ["2", "Owner study", "5 venue\nmanagers"],
    ["3", "Pilot", "5–10 venues\n1 dense zone"],
    ["4", "Scale decision", "Occupancy +\ncontribution"],
  ];
  phases.forEach((p, i) => {
    const x = 0.68 + i * 3.02;
    slide.addShape(SH.ellipse, {
      x,
      y: 5.35,
      w: 0.56,
      h: 0.56,
      fill: { color: i === 3 ? C.coral : C.lime },
      line: { color: i === 3 ? C.coral : C.lime },
    });
    slide.addText(p[0], {
      x: x + 0.16,
      y: 5.51,
      w: 0.24,
      h: 0.18,
      fontFace: "Aptos",
      fontSize: 10,
      bold: true,
      color: i === 3 ? C.white : C.green,
      align: "center",
      margin: 0,
    });
    slide.addText(p[1], {
      x: x + 0.76,
      y: 5.31,
      w: 1.72,
      h: 0.28,
      fontFace: "Georgia",
      fontSize: 14,
      bold: true,
      color: C.white,
      margin: 0,
    });
    slide.addText(p[2], {
      x: x + 0.76,
      y: 5.7,
      w: 1.72,
      h: 0.48,
      fontFace: "Aptos",
      fontSize: 9.3,
      color: "BED0C7",
      margin: 0,
      fit: "shrink",
    });
    if (i < phases.length - 1) {
      slide.addShape(SH.line, {
        x: x + 2.44,
        y: 5.63,
        w: 0.5,
        h: 0,
        line: { color: "6D8E7E", width: 1.4, endArrowType: "triangle" },
      });
    }
  });

  slide.addText("Convert player flexibility into profitable occupancy.", {
    x: 7.8,
    y: 6.62,
    w: 4.85,
    h: 0.35,
    fontFace: "Georgia",
    fontSize: 16,
    bold: true,
    italic: true,
    color: C.lime,
    align: "right",
    margin: 0,
  });
  addFooter(slide, 8, true, "Source: 07_prototype_plan.md; 08_pitch_deck_outline.md");
}

pptx.writeFile({
  fileName: "occupancy_prototype_pitch_deck.pptx",
});
