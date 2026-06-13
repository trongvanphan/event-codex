# Prototype Pitch Deck Outline: Maximizing Court Occupancy

## Deck Objective

Persuade venue owners and business stakeholders to validate a software prototype that increases profitable court occupancy by matching flexible players with expiring off-peak inventory.

The deck should make one point clear:

> The opportunity is not to discount every court-hour. It is to help the right player discover and book the right underused court-hour before its value expires.

---

## Slide 1: Fill Every Viable Court-Hour

### Purpose

Introduce the product vision and establish occupancy as the primary business outcome.

### Headline

**Fill Every Viable Court-Hour**

### Core Message

Maximize profitable occupancy by connecting flexible players with suitable off-peak and last-minute court inventory.

### Supporting Content

- Players need a faster way to find a court that fits their time, location, quality, and budget.
- Venue owners need to sell unused inventory without weakening peak-hour pricing.
- The proposed product coordinates demand around inventory that would otherwise expire.

### Suggested Visual

A court schedule heatmap showing full peak periods and empty off-peak periods, with the empty slots becoming confirmed bookings.

---

## Slide 2: The Current Booking Experience Is Fragmented

### Purpose

Describe the current situation from both the player and venue-owner perspectives.

### Headline

**Players Are Searching While Courts Are Sitting Empty**

### Current Player Experience

- Players coordinate through Zalo, Messenger, Facebook groups, and personal contacts.
- Organizers call or message venues one by one to check availability.
- Groups compare screenshots, negotiate a time, collect money, and find replacement players manually.
- Availability, venue quality, travel distance, policies, and final prices are difficult to compare.
- Solo players may want to play but cannot assemble a complete group.

### Current Venue Experience

- Owners manage schedules through calls, chat messages, and spreadsheets.
- Peak hours often sell naturally, while weekday mornings, afternoons, late nights, and cancelled slots remain empty.
- Unsold court-hours are perishable and cannot be recovered after the time passes.
- Last-minute availability is posted manually to chat groups with limited reach.
- Informal discounts are difficult to measure and may reduce revenue from customers who would have paid full price.

### Suggested Visual

A split-screen journey: fragmented player channels on the left and an underused venue schedule on the right.

---

## Slide 3: The Core Problem

### Purpose

Define the central problem and the pain points that prevent higher occupancy.

### Headline

**Supply and Demand Exist, but They Fail to Meet at the Right Time**

### Problem Statement

Flexible players need a fast and trustworthy way to discover a suitable court, price, and playing option, while venue owners need to create incremental demand for expiring inventory without discounting bookings that would happen at full price.

### Player Pain Points

- Finding real-time availability takes too long.
- The preferred peak slot may already be full.
- Alternative times and nearby venues are not presented clearly.
- Hidden fees and unclear promotion rules reduce trust.
- Group coordination can fail even when a court is available.

### Venue-Owner Pain Points

- Off-peak and cancelled inventory expires unsold.
- Inventory is fragmented across direct calls, messages, and manual schedules.
- Owners lack reliable demand and occupancy data.
- Blanket discounts risk cannibalizing full-price bookings.
- Owners cannot easily identify which offer created truly incremental demand.

### Key Insight

The problem is not simply a lack of discounts. It is a lack of demand orchestration across time, location, price, venue quality, and group readiness.

### Suggested Visual

A gap diagram with player demand on one side, empty court-hours on the other, and the missing coordination layer in the middle.

---

## Slide 4: The Business Cost of Empty Inventory

### Purpose

Show why the problem matters commercially and why occupancy must be optimized carefully.

### Headline

**Every Empty Court-Hour Is Revenue That Disappears**

### Business Impact

- An unsold court-hour has zero value after its start time.
- Low off-peak occupancy reduces revenue per available court-hour and venue contribution.
- Manual booking and cancellation recovery consume staff time.
- Stale or fragmented inventory creates double-booking risk and damages player trust.
- Uncontrolled promotions may increase booking volume while reducing total contribution.

### Evidence From the Current Model

- The synthetic four-week baseline contains **4,480 available court-hours**.
- Only **2,320 court-hours are booked**, producing **51.79% total occupancy**.
- The model leaves **1,920 of 3,200 off-peak court-hours unused**.
- Weekend demand after 16:00 is already modeled at 100%, so discounting those periods would give away revenue rather than create demand.

### Business Principle

The target is **profitable occupancy**, measured through incremental occupied court-hours, revenue per available court-hour, and contribution after incentives.

### Suggested Visual

Three large metric callouts for occupancy, unused off-peak hours, and booked hours, supported by a peak-versus-off-peak bar chart.

---

## Slide 5: What Users Actually Need

### Purpose

Translate user behavior into product requirements that can improve occupancy.

### Headline

**Flexibility Exists When the Trade-Off Is Clear**

### Primary User Insight

Convenience-first organizers want to confirm a reliable court quickly. They may accept a different time or nearby venue when the alternative is relevant, clearly explained, and easy to share with the group.

### Supporting Insights

- Busy professionals prioritize certainty, proximity, and time saved.
- Price-sensitive players may trade time or distance for meaningful savings.
- Flexible workers and students cannot be understood through demographic assumptions alone.
- Players need to see the final price and understand why an option is recommended.
- Venue owners want automation only when they can control price floors, eligible periods, inventory caps, and campaign limits.

### Opportunity Statement

If the product can reveal real schedule flexibility and present a trustworthy alternative, it can redirect demand from full peak slots into underused inventory.

### Suggested Visual

A persona card for the group organizer beside a decision trade-off showing preferred time versus best-value alternative.

---

## Slide 6: The Prototype

### Purpose

Explain the prototype concept, its riskiest assumption, and what will be tested.

### Headline

**Test Whether Transparent Alternatives Can Shift Demand**

### Core Hypothesis

> Will a player accept a different court-hour when the product clearly explains the trade-off between schedule, travel, quality, and savings?

### Prototype Concept

A mid-fidelity mobile experience that allows a guest to:

- Search nearby live court availability.
- Set a preferred time and level of schedule flexibility.
- Compare the preferred option with a best-value alternative.
- See adjacent-time and nearby-venue recommendations.
- Open a clear "Why recommended" explanation.
- Select an option and explain the reason for the decision.

### Prototype Boundaries

- Hardcoded venues, inventory, prices, and recommendation scenarios.
- Focus on player discovery and decision-making.
- Payment, authentication, group invitations, owner analytics, and production machine learning are excluded from this test.

### Suggested Visual

Three mobile mockups: search preferences, ranked recommendations, and recommendation explanation.

---

## Slide 7: Demo Flow

### Purpose

Walk stakeholders through the exact experience being tested.

### Headline

**From Preferred Slot to Occupancy-Creating Alternative**

### Demo Scenario

A player wants to book badminton for four people near work tomorrow at 18:00.

### Flow

1. **Browse as a guest:** Select sport, area, date, and preferred time.
2. **Add flexibility:** Indicate willingness to start earlier or later.
3. **Review results:** See the preferred option, best match, and best-value alternative.
4. **Compare the trade-off:** Review time difference, travel distance, venue quality, and final saving.
5. **Understand the recommendation:** Open "Why recommended" to see the matching criteria.
6. **Choose an option:** Select the original slot or an occupancy-creating alternative.
7. **Capture the reason:** Ask what influenced the decision and whether the recommendation felt trustworthy.

### Example Recommendation

> Save 40,000 VND by starting at 17:00 instead of 18:00. This option is eight minutes away and matches your selected flexible start time.

### Suggested Visual

A seven-step horizontal user-flow diagram with the preferred 18:00 slot branching to a recommended 17:00 off-peak slot.

---

## Slide 8: Expected Value and Next Steps

### Purpose

Connect prototype learning to business value and propose a controlled validation plan.

### Headline

**Validate Demand Shifting Before Building the Full Platform**

### Expected Player Value

- Find a suitable court in under 60 seconds.
- Make a confident decision with clear price and trade-off information.
- Spend less time contacting venues and coordinating options.
- Discover relevant times and venues that would otherwise remain invisible.

### Expected Venue Value

- Increase incremental off-peak and last-minute occupancy.
- Refill cancelled inventory before its value expires.
- Protect peak pricing with configurable floors, caps, and eligible periods.
- Measure occupancy lift and contribution instead of relying on raw discounted bookings.
- Build better demand data for future inventory and campaign decisions.

### Prototype Success Criteria

- At least **80%** of participants complete the flow without assistance.
- Median time from landing to selected slot is below **60 seconds**.
- At least **40%** consider a recommended alternative time.
- Users understand why the recommendation appeared.
- No repeated trust concern about hidden or discriminatory pricing.

### Next Steps

1. Build the clickable mobile prototype with two recommendation scenarios.
2. Test with 13 players across convenience-first, price-sensitive, and schedule-flexible segments.
3. Run a separate concept study with five venue owners or managers.
4. Validate recommendation acceptance, trust, and owner campaign guardrails.
5. Launch a controlled pilot with 5-10 venues in one dense neighborhood.
6. Track incremental occupied court-hours, revenue per available court-hour, contribution after incentives, and repeat booking.

### Closing Message

> The prototype will show whether transparent, relevant alternatives can convert player flexibility into profitable occupancy before significant software investment is made.

### Suggested Visual

A three-stage roadmap: prototype validation, controlled venue pilot, and scalable occupancy platform.

