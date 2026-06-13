# Design Thinking Document

## Empathize

### Players

Urban badminton and pickleball players often coordinate through chat groups, call several venues, compare screenshots, collect money, and negotiate a time that works for everyone. They want exercise, social connection, and a fair price, but face fragmented inventory and uncertainty about partners, quality, distance, and final cost.

Relevant groups include:

- Busy professionals who prioritize convenience and predictable evening/weekend play.
- Students and price-sensitive players who may trade time or distance for savings.
- Flexible workers, shift workers, and freelancers whose availability does not fit demographic stereotypes.
- Solo players who want to play but cannot assemble a complete group.

Vietnam's mobile-first behavior, widespread digital payments, and use of Zalo/Messenger support a lightweight booking and sharing flow. Gen Z values peer signals and affordability; Millennials value convenience and time saved.

### Venue owners

Owners manage perishable inventory: an unsold court-hour cannot be recovered after the time passes. Peak hours may sell naturally, while weekday mornings, afternoons, late nights, or last-minute cancellations remain empty. Many owners lack reliable demand data and fear that discounts will train regular customers to stop paying full price.

### Current workarounds

- Calling or messaging venues one by one
- Booking through personal relationships or Facebook/Zalo groups
- Maintaining owner schedules manually
- Posting last-minute empty slots in chat groups
- Offering informal discounts without measuring incrementality
- Asking friends to find substitute players after cancellation

## Define

### Primary problem statement

Flexible badminton and pickleball players need a fast, trustworthy way to discover a suitable court, price, and playing group because fragmented availability and coordination make booking unnecessarily difficult.

### Owner problem statement

Venue owners need to create incremental demand for expiring off-peak inventory without discounting bookings that would have occurred at full price.

### Jobs to be done

- When my group decides to play, help me find and confirm a suitable court in minutes.
- When I can adjust my schedule, show me exactly what I save and what trade-off I make.
- When I lack enough players, help me join or form a compatible game.
- When a slot is likely to remain empty, help me sell it at the best acceptable contribution margin.
- When a booking cancels, help me refill it before its value expires.

### Design principles

- Show value before demanding account setup.
- Optimize for actual behavior and stated flexibility, not demographic stereotypes.
- Make the final price and offer reason understandable.
- Preserve user control over preferences and data.
- Give owners automation with floors, caps, and override controls.

## Ideate

### Candidate ideas

- Best-value time recommendations
- "Play earlier and save" schedule alternatives
- Nearby venue substitution when a preferred venue is full
- Open games for solo players
- Skill and play-style matching
- Group invitations and split payment
- Waitlist with automatic cancellation alerts
- Last-minute inventory drops
- Recurring weekly reservations
- Off-peak passes and prepaid bundles
- Student, corporate, and community programs
- Loyalty rewards tied to off-peak play
- Venue demand heatmap and occupancy forecast
- Suggested campaigns with discount guardrails
- No-show deposits and cancellation policy
- Zalo share links and booking reminders
- Rain/traffic-aware recommendations where relevant
- Tournament and league scheduling

### Winning concept

Combine **personalized schedule alternatives** with **social demand creation and inventory recovery**. Pricing alone cannot solve the case where a user has no partners, does not trust the venue, or never sees the available slot.

Recommendations should balance:

- **Exploitation:** reliable venues, familiar times, and options likely to convert.
- **Exploration:** a limited number of new venues, time windows, or game formats that may reveal additional flexibility.

This avoids popularity bias, prevents the same peak venues from dominating results, and helps new venues receive qualified exposure.

### MVP concept

A marketplace that lets a user browse nearby live availability, select preferences, see transparent best-value alternatives, pay, invite friends, and join a waitlist. Owners publish inventory and bounded off-peak promotions and monitor occupancy and realized revenue.

## Prototype

Create a mid-fidelity clickable mobile prototype for the riskiest assumption:

> Will a player accept a different court-hour when the product presents a relevant, transparent trade-off between schedule, travel, quality, and saving?

The test flow is: browse as guest -> state schedule flexibility -> compare the preferred option with a best-value alternative -> inspect "why recommended" -> choose an option.

Use hardcoded recommendations. Booking, payment, invitations, owner analytics, and production ML are outside this discovery prototype.

## Test

### Participants

Player recommendation study:

- 5 office professionals
- 5 students or price-sensitive young players
- 3 flexible/shift workers

Separate owner concept study:

- 5 venue owners or managers

### Questions

- Can players find a suitable option in under 60 seconds?
- Does a cheaper adjacent time cause users to change their plan?
- Is the reason for each recommendation clear?
- Do users perceive offers as useful or unfair?
- Is finding partners as important as finding a court?

For the separate owner study:

- Will owners trust a recommendation with a price floor and expected impact?
- Which inventory, cancellation, and payment workflows prevent adoption?

### Success criteria

- At least 80% complete the player flow without assistance.
- Median time from landing to selected slot is below 60 seconds.
- At least 40% consider a recommended alternative time.
- No repeated finding that hidden or personalized prices feel discriminatory.

These are provisional discovery thresholds, not market benchmarks. Owner-study success criteria should be defined after reviewing actual venue economics and workflows.

### Key experiments after prototype

- Generic availability versus personalized alternatives
- Discount-only offer versus discount plus open-game matching
- Immediate signup versus browse-first onboarding
- Waitlist alert versus public last-minute promotion
- Recommended campaign versus owner-created campaign

Owner campaign trust should be tested separately with a low-fidelity concept and historical venue data. Combining both sides in one prototype would make results difficult to interpret.
