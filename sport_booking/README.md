# Sport Booking Product Concept

## One-line concept

A badminton and pickleball marketplace that helps players find the best-value court and group for their schedule, while helping venue owners fill otherwise empty court-hours without unnecessarily discounting peak demand.

## Product thesis

The opportunity is not merely "personalized discounts." Empty courts can result from several different problems:

- Players cannot find enough partners.
- Available times do not match their preferred schedule.
- Search requires contacting multiple venues through phone, Facebook, or Zalo.
- Cancellations leave inventory that owners cannot resell quickly.
- Fixed pricing treats high-demand and low-demand court-hours the same.
- Users do not know whether a lower-priced time is worth changing their routine for.

The product should therefore optimize **incremental occupied court-hours and venue contribution margin**, not total discount redemptions.

## Owner-provided operating baseline

The synthetic four-week operating model assumes one stadium with 10 courts:

- 70% occupancy on weekdays for slots starting at 18:00 or later
- 100% occupancy on Saturday and Sunday for slots starting at 16:00 or later
- 40% occupancy at other times
- 120,000 VND price and 60,000 VND variable cost per booked court-hour
- 5% minimum discount needed to influence booking time

With assumed opening hours of 06:00-22:00, this produces 4,480 available court-hours, 2,320 booked hours, 51.79% total occupancy, 278.4M VND revenue, and 139.2M VND contribution over four weeks. See `10_operating_model.md`.

The full-occupancy target requires 2,160 additional booked hours. Under the two approved campaigns:

- Targeted discounts on only incremental bookings remain contribution-positive through 30%.
- A blanket 30% discount at full occupancy reduces contribution to 107.5M VND, which is 31.7M VND below baseline.
- The calculated full-occupancy blanket-discount ceiling is approximately 24.1%; the recommended operational ceiling is 20%.

## Recommended solution

Build a two-sided mobile-first marketplace with five connected loops:

1. **Fast discovery:** Show nearby courts, final prices, amenities, travel time, and availability in one view.
2. **Personalized value:** Recommend times using stated preferences and observed behavior, including a clear reason such as "20% less if you play 60 minutes earlier."
3. **Demand creation:** Let solo players join open games or invite friends and split payment.
4. **Inventory recovery:** Use waitlists and targeted alerts to refill cancellations and near-term empty slots.
5. **Owner optimization:** Give venues pricing suggestions, occupancy forecasts, campaign controls, and an explanation of expected revenue impact.

## Does the app need account personalization?

Yes, but it should be progressive rather than mandatory at first launch.

- Guests should be able to browse availability and prices immediately.
- Lightweight onboarding can ask sport, area, preferred days/times, skill level, and schedule flexibility.
- An account becomes necessary for booking, payment, joining games, rewards, and saved preferences.
- The system should learn from searches, bookings, cancellations, offer acceptance, travel radius, and price sensitivity.
- Users must be able to edit preferences, opt out of personalized offers, and understand why an offer appears.

Occupation and student status can help with cold start or eligibility for a student program, but should not determine individual prices. A student may attend morning classes; an office worker may work shifts. Behavior and explicit schedule flexibility are stronger signals.

## Personalization model

### Useful signals

- Preferred sport, venue, court type, and amenities
- Usual party size and playing partners
- Preferred and acceptable time windows
- Maximum travel distance or travel time
- Skill level and social/competitive intent
- Booking lead time and frequency
- Historical response to prices and offers
- Cancellation/no-show history
- Real-time context: location, time, remaining inventory, and slot expiry

### Personalized outputs

- Ranked courts and time slots
- "Best value near you" alternatives
- A controlled mix of familiar choices and novel venues/times so recommendations do not become repetitive
- Open games with compatible skill and schedule
- Rebooking shortcuts
- Waitlist and cancellation alerts
- Bundles, passes, and loyalty rewards
- Notification timing and channel

### Recommendation pipeline

The context on recommendation systems suggests a practical three-stage design:

1. **Candidate retrieval:** Find court-hours that satisfy hard constraints such as sport, date, capacity, availability, price floor, and travel radius.
2. **Ranking:** Score candidates using explicit preferences, observed behavior, venue reliability, final price, and current context.
3. **Re-ranking:** Apply availability checks, owner rules, recommendation diversity, exploration, and fairness constraints before display.

Optimize for completed, attended bookings and repeat value rather than offer clicks. A misleading low-price recommendation may increase clicks while reducing trust, attendance, or repeat use.

## Pricing principles

- Never raise a user's price because the system believes they can pay more.
- Use the same published price for the same court-hour and eligibility conditions.
- Personalize which eligible offer is shown, not a hidden base price.
- Put venue-defined floors, maximum discounts, peak protections, and campaign budgets around automation.
- Compare every promotion against a holdout group to measure bookings that would not otherwise occur.
- Stop a discount when it cannibalizes full-price demand or reduces contribution margin.
- Apply 20%-30% offers only to expiring, unsold inventory and qualified incremental demand.

## Feature priority

### MVP

- Venue onboarding and court inventory calendar
- Search by location, time, sport, and price
- Transparent slot pricing and booking
- MoMo/ZaloPay/VNPay-compatible payment path
- Basic preference onboarding and rules-based recommendations
- Owner-created off-peak offers with guardrails
- Waitlist and cancellation refill notifications
- Split payment or shareable booking invitation
- Owner occupancy and revenue dashboard

### Next

- Open games and skill-based player matching
- Packages, memberships, and corporate/student programs
- Forecasting and recommended campaign setup
- Personalized notification timing
- Loyalty and referral program

### Later

- Contextual bandit optimization with control groups
- Multi-venue passes and league/tournament tools
- Automated schedule and price recommendations
- Conversational booking through the app or Zalo

## North-star and guardrail metrics

**North star:** Incremental occupied court-hours per active venue per week.

**Supporting metrics:** off-peak occupancy, booking conversion, repeat booking rate, time to book, cancellation refill rate, venue revenue per available court-hour, and open-game fill rate.

**Guardrails:** contribution margin, average realized price, cancellation/no-show rate, notification opt-out rate, fairness complaints, and percentage of users receiving a clear offer explanation.

## Main assumptions to validate

- Enough venues will keep inventory accurate and accept online payment.
- Users value consolidated availability enough to change existing phone/Zalo habits.
- A meaningful share of players have schedule flexibility when shown a worthwhile alternative.
- Lack of partners is a material cause of unbooked court-hours.
- Targeted offers create incremental bookings rather than subsidizing bookings that would happen anyway.

## Context review

See `09_context_review.md` for the comprehensive audit of all files under `contexts`, their applicability, evidence limitations, and the changes made after the audit.

## Included artifacts

- `01_design_thinking.md`
- `02_personas.md`
- `03_journey_map.md`
- `04_dvf.md`
- `05_product_roadmap.md`
- `06_prd.md`
- `07_prototype_plan.md`
- `08_pitch_deck_outline.md`
- `09_context_review.md`
- `10_operating_model.md`

These documents use the repository context as directional workshop evidence. Market figures and behavioral claims should be independently verified before an investment decision or public pitch.
