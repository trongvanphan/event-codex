# Product Requirements Document: Personalized Off-Peak Booking MVP

## Objective

Enable players to discover and book a suitable badminton or pickleball court quickly, while enabling owners to fill incremental off-peak inventory through transparent, bounded offers.

## Target Audience

- Convenience-first group organizers
- Price-sensitive but schedule-flexible players
- Venue owners with recurring underused periods

Solo-player matching is strategically important but is limited in this MVP to invitations and waitlists; full open-game matching follows after reliable transactions exist.

## Value Proposition

Players see the best combination of time, location, quality, and final price without contacting multiple venues. Owners publish available inventory once and run controlled promotions that protect price floors and measure incremental occupancy.

## User Stories / Requirements

### Player discovery

- As a guest, I want to browse nearby availability without creating an account so that I can see value immediately.
- As a player, I want to search by sport, date, time, location, duration, and price so that I can find a practical option.
- As a player, I want results to show final price, distance/travel estimate, amenities, and availability status so that I can compare confidently.
- As a flexible player, I want adjacent times and nearby venues ranked by value so that I can save money knowingly.
- As a player, I want to know why an option is recommended so that personalization does not feel arbitrary.

### Preferences and account

- As a new user, I want to state my sport, area, time windows, flexibility, and budget in under one minute.
- As a user, I want to edit or clear preferences and personalized history.
- As a privacy-conscious user, I want to use generic sorting and opt out of personalized offers.
- As a user, I want my selected slot preserved when signup or login becomes necessary.

### Booking and group coordination

- As an organizer, I want to reserve and pay for a slot so that it cannot be taken by another user.
- As an organizer, I want a shareable invitation and per-person amount so that coordination is simple.
- As a player, I want clear cancellation, refund, and venue policies before payment.
- As a player, I want confirmation and reminders through my chosen channel.

### Waitlist and recovery

- As a player, I want to join a waitlist for a full time range or venue.
- As a player, I want a time-limited alert when a suitable slot opens.
- As an owner, I want cancelled inventory republished automatically under my configured rules.

### Owner inventory

- As an owner, I want to define courts, operating hours, prices, and unavailable periods.
- As an owner, I want booking status updated atomically so that courts cannot be double-booked.
- As an owner, I want to set minimum price, maximum discount, eligible periods, inventory cap, and campaign dates.
- As an owner, I want to pause or override a campaign.
- As an owner, I want peak-period protection so that the system does not recommend discounts for weekend slots after 16:00 or weekday slots after 18:00 unless I explicitly enable them.

### Owner analytics

- As an owner, I want occupancy and realized revenue by day and hour.
- As an owner, I want promotion performance compared with a control or baseline.
- As an owner, I want to see full-price bookings, promoted bookings, cancellations, and refilled cancellations separately.

### Platform and fairness

- The same court-hour and eligibility condition must expose the same published price to all users.
- The system may personalize ranking and eligible offer presentation but must not infer willingness to pay to secretly increase price.
- Every offer impression and booking must retain campaign, eligibility, and experiment metadata.
- Venue floors and promotion budgets must be enforced server-side.
- Ranked results must reserve bounded exposure for relevant new venues or time alternatives so historical popularity does not permanently suppress discovery.
- Recommendation success must include confirmed and attended booking outcomes, not only clicks or checkout starts.

## Acceptance Criteria

- A guest can search and view results without signing in.
- A user can complete booking without losing the selected slot during authentication.
- Conflicting checkout attempts cannot both create confirmed bookings.
- Results include total price and all mandatory fees.
- Recommended offers include a concise explanation.
- Users can disable personalized ranking and notifications.
- Owners cannot configure a price below their floor.
- The default 5% off-peak offer is 114,000 VND for a 120,000 VND court-hour.
- A blanket 5% off-peak campaign must show a 44.44% break-even occupancy reference based on the supplied 60,000 VND variable cost.
- The dashboard separates occupancy lift from raw discounted bookings.
- Cancellation refill alerts respect user time, distance, sport, and notification preferences.
- Results contain relevant variety without violating the user's hard constraints.

## Scope

### In Scope

- Badminton and pickleball
- One pilot city zone
- Guest browse and account-based booking
- Venue inventory and fixed slot pricing
- Rules-based recommendation ranking
- Owner-created off-peak campaigns
- Payment/deposit integration
- Invitations, reminders, cancellations, refunds, and waitlists
- Event tracking and owner dashboard
- Vietnamese-first mobile experience

### Out of Scope

- Fully automated price changes
- Individualized hidden prices
- Advanced ML or LLM dependency
- Full open-game matchmaking
- Tournament and league management
- Multi-city or international operation
- Hardware access control
- Complex venue POS replacement

## Dependencies & Assumptions

### Dependencies

- Venue inventory accuracy and staff adoption
- Payment provider and refund support
- Mapping/geocoding service
- Notification delivery provider
- Analytics and experimentation infrastructure
- Legal review for personal data, terms, and cancellations

### Assumptions

- Users will browse before signup but accept account creation at booking.
- At least some users will move time or venue for a clear saving.
- Owners will expose enough off-peak inventory for a useful marketplace.
- Campaign controls will reduce owner fear of cannibalization.
- A dense launch zone can generate adequate supply and demand.

### Risks

- Stale inventory causes trust failure.
- Discounts attract deal-only users without repeat behavior.
- Direct-channel bookings create synchronization conflicts.
- Refund friction creates disproportionate support demand.
- Sparse supply makes personalization irrelevant.

## Analytics Events

- `search_started`
- `search_results_viewed`
- `recommendation_impression`
- `recommendation_reason_opened`
- `slot_selected`
- `offer_selected`
- `waitlist_joined`
- `checkout_started`
- `booking_confirmed`
- `booking_cancelled`
- `refund_completed`
- `cancellation_slot_refilled`
- `invite_shared`
- `personalization_disabled`
- `campaign_created`
- `campaign_paused`

Each event should include anonymous/user ID as permitted, venue/court/slot, sport, query context, price, campaign, ranking position, experiment assignment, and timestamp.
