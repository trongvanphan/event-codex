# Synthetic Stadium Operating Model

## Purpose

This model converts owner-provided assumptions into a court-hour dataset for product planning and promotion experiments. It is synthetic, not a record of actual bookings.

## Inputs

- One stadium with 10 bookable courts
- Representative four-week period: June 1-28, 2026
- Assumed opening hours: 06:00-22:00
- One-hour booking slots
- Weekday slots starting at 18:00 or later: 70% occupied
- Saturday and Sunday slots starting at 16:00 or later: 100% occupied
- All other slots: 40% occupied
- Full price: 120,000 VND per court-hour
- Variable cost: 60,000 VND per booked court-hour
- Minimum meaningful discount: 5%
- User constraint priority: schedule, distance, price, partner availability
- No modeled difference between badminton and pickleball

## Baseline Results

| Segment | Available hours | Booked hours | Occupancy | Revenue | Contribution |
|---|---:|---:|---:|---:|---:|
| Weekday after 18:00 | 800 | 560 | 70% | 67.2M VND | 33.6M VND |
| Weekend after 16:00 | 480 | 480 | 100% | 57.6M VND | 28.8M VND |
| Other off-peak time | 3,200 | 1,280 | 40% | 153.6M VND | 76.8M VND |
| **Total** | **4,480** | **2,320** | **51.79%** | **278.4M VND** | **139.2M VND** |

Contribution means revenue minus the supplied variable cost. It excludes fixed rent, staff salaries, tax, payment fees, marketplace commission, refunds, and marketing cost.

## Discount Economics

A 5% discount changes:

- Price: 120,000 -> 114,000 VND
- Contribution per booked hour: 60,000 -> 54,000 VND
- Contribution reduction on a booking that would have paid full price: 10%

If the 5% discount is given to every off-peak booking, occupancy must rise from 40% to **44.44%** to preserve baseline off-peak contribution.

| Off-peak occupancy | Incremental hours | Blanket discount contribution change | Incremental-only offer contribution change |
|---:|---:|---:|---:|
| 40% | 0 | -7.68M VND | 0 |
| 42.5% | 80 | -3.36M VND | +4.32M VND |
| 44.44% | 142.2 | approximately 0 | +7.68M VND |
| 45% | 160 | +0.96M VND | +8.64M VND |
| 50% | 320 | +9.60M VND | +17.28M VND |
| 60% | 640 | +26.88M VND | +34.56M VND |

The incremental-only strategy assumes existing demand continues to pay full price and the offer is used only to create bookings that would not otherwise happen. Real performance will lie between these simplified extremes.

## Full-Occupancy Target With Two Campaigns

The owner-approved campaigns are interpreted as discount ranges:

- **Campaign 1:** 5%-20%; evaluated at 5%, 12.5% midpoint, and 20%
- **Campaign 2:** 10%-30%; evaluated at 10%, 20% midpoint, and 30%

This is a target-state impact analysis, not a demand forecast. It assumes the campaigns successfully increase total occupancy from 51.79% to 100%. The existing evidence does not prove which discount will achieve that result.

### Capacity required

- Baseline booked hours: 2,320
- Full-capacity booked hours: 4,480
- Additional bookings required: 2,160 court-hours
- Booking growth required: 93.1%
- Occupancy lift required: 48.21 percentage points

### Strategy A: Discount only incremental bookings

Existing 2,320 bookings remain at 120,000 VND. Only the 2,160 newly filled hours receive the campaign discount.

| Campaign point | Discount | Discounted price | Revenue at 100% | Contribution at 100% | Contribution lift |
|---|---:|---:|---:|---:|---:|
| Campaign 1 minimum | 5% | 114,000 | 524.6M | 255.8M | +116.6M |
| Campaign 1 midpoint | 12.5% | 105,000 | 505.2M | 236.4M | +97.2M |
| Campaign 1 maximum | 20% | 96,000 | 485.8M | 217.0M | +77.8M |
| Campaign 2 minimum | 10% | 108,000 | 511.7M | 242.9M | +103.7M |
| Campaign 2 midpoint | 20% | 96,000 | 485.8M | 217.0M | +77.8M |
| Campaign 2 maximum | 30% | 84,000 | 459.4M | 191.0M | +51.8M |

Every tested discount remains contribution-positive because an otherwise empty hour contributes zero, while even a 30% discounted booking contributes 24,000 VND before fixed and platform costs.

### Strategy B: Blanket discount all bookings

Every booking, including existing demand, receives the campaign discount.

| Campaign point | Discount | Revenue at 100% | Contribution at 100% | Change vs baseline |
|---|---:|---:|---:|---:|
| Campaign 1 minimum | 5% | 510.7M | 241.9M | +102.7M |
| Campaign 1 midpoint | 12.5% | 470.4M | 201.6M | +62.4M |
| Campaign 1 maximum | 20% | 430.1M | 161.3M | +22.1M |
| Campaign 2 minimum | 10% | 483.8M | 215.0M | +75.8M |
| Campaign 2 midpoint | 20% | 430.1M | 161.3M | +22.1M |
| Campaign 2 maximum | 30% | 376.3M | 107.5M | **-31.7M** |

At full occupancy, the blanket-discount break-even point is approximately **24.1%**. A blanket discount above this level produces less contribution than the current 51.79%-occupied baseline, even though every court is booked.

### Interpretation

- Campaign 1 is financially positive across its full 5%-20% range if full occupancy is achieved.
- Campaign 2 is positive when discounts are targeted to incremental bookings.
- Campaign 2 becomes destructive at its 30% maximum if applied to all bookings.
- Full occupancy is not the same as optimal profit. A 100%-occupied venue at a 30% blanket discount earns 31.7M VND less contribution than the current baseline.
- The system should escalate discounts only for unsold inventory and should not automatically expose existing full-price demand to deeper offers.

### Recommended campaign policy

1. Use Campaign 1 as the default ladder: start at 5%, then test 10%, 15%, and at most 20%.
2. Use Campaign 2 only for highly perishable inventory, such as same-day empty slots, and apply it to qualified incremental demand.
3. Never blanket-discount peak inventory.
4. Cap automatic blanket discounts below 24%; operationally, use a stricter 20% ceiling.
5. Stop increasing discount once additional contribution no longer improves.
6. Track occupancy and contribution together; do not optimize occupancy alone.

## Product Implications

### Protect peak periods

Do not discount:

- Weekend slots from 16:00 onward, because modeled occupancy is already 100%.
- Weekday slots from 18:00 onward by default, because 70% occupancy leaves less unused capacity and greater cannibalization risk.

### Target off-peak inventory

The 3,200 monthly off-peak court-hours represent the main addressable inventory. At 40% occupancy, 1,920 court-hours remain unused.

Because schedule is the highest-priority constraint, the first recommendation should be an adjacent time that still satisfies the user's schedule. Distance should rank second, then price. A discount should not compensate for an unacceptable schedule or travel distance.

### Use promotion eligibility, not hidden personalized prices

Publish the same 114,000 VND price for an eligible court-hour. Personalize which relevant off-peak slots are shown, while keeping the price consistent for users booking the same offer.

### Measure incrementality

For each off-peak campaign:

- Reserve a comparable holdout group at 120,000 VND.
- Track offer impressions, bookings, attendance, and realized contribution.
- Stop blanket discounting unless occupancy exceeds 44.44%.
- Prefer targeted offers to users who have demonstrated schedule flexibility.

## Constraint Data

The supplied constraint information is ordinal only:

1. Schedule
2. Distance
3. Price
4. Partner availability

It cannot be represented as user shares without inventing percentages. The app should collect a reason when a user rejects a result or abandons booking, then calculate actual shares.

## Cancellation Input Requiring Confirmation

The supplied statement was:

> "0% on 3 times of month, 20% of full price"

It could mean several different things, such as three cancellations per month, a 0% no-show rate, or a cancellation charge equal to 20% of full price. The synthetic financial model excludes cancellation effects until this definition is confirmed.

## Generated Files

- `data/synthetic_court_hours.csv`: 4,480 court-hour rows
- `data/monthly_summary.csv`: segment and total baseline economics
- `data/discount_scenarios.csv`: blanket versus incremental-only 5% offer scenarios
- `data/full_occupancy_campaigns.csv`: both campaign ranges at full occupancy under targeted and blanket discount scopes
- `data/assumptions.csv`: supplied inputs, calculated inputs, and unresolved assumptions
- `scripts/generate_synthetic_data.mjs`: reproducible generator
