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
- `data/assumptions.csv`: supplied inputs, calculated inputs, and unresolved assumptions
- `scripts/generate_synthetic_data.mjs`: reproducible generator
