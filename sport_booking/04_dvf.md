# DVF Framework

## Desirable

### Evidence and rationale

- The repository context describes a large mobile-first Vietnamese working-age population with strong digital payment and personalized-service habits.
- Gen Z is price-conscious and socially influenced; Millennials place high value on convenience and saved time.
- Instant-gratification behavior makes fragmented calls, messages, and long onboarding particularly costly.
- Personalization can reduce cognitive load by ranking relevant venue-time-price combinations.
- Owner-provided assumptions indicate a large utilization gap: other-time occupancy is 40%, compared with 70% after 18:00 on weekdays and 100% after 16:00 on weekends.
- The owner reports that a 5% discount can shift a booking, while schedule and distance remain higher-priority constraints than price.

### Acute needs

- Players need trustworthy consolidated availability.
- Organizers need lower coordination effort.
- Flexible players need a meaningful exchange between schedule inconvenience and price.
- Solo players need compatible partners.
- Owners need to monetize expiring inventory without damaging peak yield.

### Validation still required

The owner inputs improve the initial model but are not transaction-level evidence. Research must validate:

- Observed occupancy by court-hour and booking lead time
- Quantified shares of schedule, distance, price, and partner constraints
- Whether a 5% offer changes completed bookings in a controlled test
- Incidence of partner shortage
- Owner commission tolerance
- Channel fragmentation and inventory synchronization effort

## Viable

### Revenue model

- Commission on completed bookings
- Optional monthly owner software plan for operations and analytics
- Payment processing margin where appropriate
- Sponsored placement clearly labeled and separated from organic ranking
- Later: corporate wellness, memberships, leagues, and multi-venue passes

### Unit economics

Track revenue and contribution margin per available court-hour, not gross booking value alone.

Illustrative booking economics:

`Marketplace contribution = commission + service revenue - payment cost - incentive - support/refund cost`

A discounted booking is valuable only when its expected contribution exceeds the probability-weighted contribution of waiting for a full-price booking.

Owner-provided unit economics:

- Full price: 120,000 VND per booked hour
- Variable cost: 60,000 VND per booked hour
- Full-price contribution: 60,000 VND
- Price after 5% discount: 114,000 VND
- Discounted contribution: 54,000 VND

For the modeled 40% off-peak segment, a blanket 5% discount must increase occupancy to at least 44.44% to preserve contribution. At 45% occupancy, blanket-discount contribution improves by only 0.96M VND over four weeks. Targeting only incremental demand produces materially better economics.

### Competitive advantage

- Cross-venue demand and inventory network
- Behavioral understanding of schedule flexibility
- Social graph around recurring groups and open games
- Measured incremental promotions rather than generic coupons
- Local payment and chat-sharing workflows

### Business risks

- Owners bypass the platform after customer acquisition
- Peak inventory dominates while owners withhold useful supply
- Promotions subsidize existing demand
- High support burden from cancellations and refunds
- Marketplace liquidity is too weak in initial neighborhoods

### Mitigation

Launch neighborhood by neighborhood, focus on dense venue clusters, provide repeat-booking utility, apply commission only to completed bookings, and prove incremental margin through pilots.

## Feasible

### MVP architecture

- Player mobile web or cross-platform app
- Owner web dashboard
- Relational inventory and booking database
- Search service using location, time, price, and amenities
- Payment gateway integration
- Notification service for push/SMS/Zalo-compatible links
- Analytics event pipeline and experimentation layer

### Recommendation maturity

**Stage 1:** Rules based on explicit preferences, distance, availability, and owner campaigns.

**Stage 2:** Ranking model using clicks, bookings, time flexibility, price response, and venue quality.

**Stage 3:** Contextual bandit for offer selection within strict owner and fairness constraints.

An LLM is not required for core pricing. It may later help with conversational search, owner explanations, and customer support.

### Data requirements

- Court inventory and status
- Published prices and campaign eligibility
- Search impressions and result positions
- Clicks, saves, bookings, payments, cancellations, and attendance
- User preferences and consent
- Venue quality and operational reliability
- Experiment assignment and holdout outcomes

### Constraints

- Vietnam personal-data obligations, consent, purpose limitation, and deletion
- Payment and refund compliance
- Avoidance of hidden individualized pricing
- Robust concurrency control to prevent double-booking
- Cold start for users, venues, and neighborhoods

### Overall assessment

The marketplace and rules-based recommendation MVP is feasible. The modeled off-peak inventory is economically meaningful, but blanket discounts have a narrow margin of safety. Fully automated dynamic pricing should not be promised until reliable inventory, demand, conversion, cancellation, and margin data are available.
