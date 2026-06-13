# DVF Framework

## Desirable

### Evidence and rationale

- The repository context describes a large mobile-first Vietnamese working-age population with strong digital payment and personalized-service habits.
- Gen Z is price-conscious and socially influenced; Millennials place high value on convenience and saved time.
- Instant-gratification behavior makes fragmented calls, messages, and long onboarding particularly costly.
- Personalization can reduce cognitive load by ranking relevant venue-time-price combinations.

### Acute needs

- Players need trustworthy consolidated availability.
- Organizers need lower coordination effort.
- Flexible players need a meaningful exchange between schedule inconvenience and price.
- Solo players need compatible partners.
- Owners need to monetize expiring inventory without damaging peak yield.

### Validation still required

The local context does not prove that occupation reliably predicts preferred play time or that discounts are the main solution. Research must quantify:

- Empty court-hours by venue, day, and lead time
- Causes of non-booking
- User schedule flexibility and minimum meaningful saving
- Incidence of partner shortage
- Owner willingness to publish inventory and pay commission

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

The marketplace and rules-based recommendation MVP is feasible. Fully automated dynamic pricing should not be promised until reliable inventory, demand, conversion, and margin data are available.
