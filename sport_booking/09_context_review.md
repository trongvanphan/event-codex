# Comprehensive Context Review

## Audit Result

The initial product package was based on the most directly relevant files in:

- `vietnam_context`
- `personalization_impact`
- `product_trends`
- `user_behaviors_and_analytics`
- `search_and_recommendations/overview.md`
- `use_cases/marketing.md`

That was a relevant review, but it was not a comprehensive review of every file under `contexts`. This audit subsequently read all context files and revised the artifacts where the additional material changed product or document quality.

## Evidence Standard

The repository context is suitable for workshop ideation, but it is not primary market research for sports booking. Most cited statistics are secondary summaries without complete source metadata, and none validates badminton or pickleball booking behavior directly.

Therefore:

- Demographic booking patterns are hypotheses, not facts.
- Personas are proto-personas until validated with interviews and behavioral data.
- Market and personalization statistics should not be used in an external pitch without source verification.
- Product decisions should be tested using venue inventory, search, booking, cancellation, attendance, and margin data.

## Coverage by Context Group

| Context group | Applicability | Product implication |
|---|---|---|
| Vietnam demographics and challenges | High | Mobile-first design, price sensitivity, convenience, social sharing, local payments, privacy obligations |
| Vietnam technology and startup ecosystem | Medium | Supports digital readiness and capital-efficient pilot strategy; does not prove sports-booking demand |
| Personalization impact | High | Progressive profiling, zero-party data, explainability, user control, personalization-lift measurement |
| Product trends | High | Proactive recommendations and contextual UI; avoid unnecessary LLM dependency |
| User behavior and analytics | High | Fast time-to-value, guest browsing, concise result cards, context-aware notifications |
| Search and recommendation history | High | Candidate retrieval, ranking, re-ranking, semantic intent, implicit and explicit feedback |
| Commercial case studies | High by analogy | Optimize completed value rather than clicks; manage popularity bias; combine familiarity with exploration |
| Educational and public-sector case studies | Medium by analogy | Diagnose context before recommending; organize around user intent; avoid repeated data entry |
| Marketing use case | High by analogy | Use time, behavior, and inventory context instead of static demographic segments |
| Job search use case | Medium by analogy | Explain match reasons and support semantic preference matching |
| Education, finance, and investment use cases | Low | General personalization patterns only; high-stakes domain claims do not transfer to sports pricing |
| AI in practice | Medium | Start with the problem, use human control, measure task success, deliver in small validated increments |
| Product artifact guidance | High | Keep personas bounded, roadmap outcome-based, PRD focused on what/why, and prototype limited to the riskiest assumption |
| Advanced workshop prompts | High | Address privacy, cold start, data integration, and exploration versus exploitation explicitly |

## Material Findings Added After the Audit

### 1. Segmentation must not become stereotyping

The context repeatedly favors behavior and real-time context over broad demographics. "Students play mornings" and "office workers play evenings" should be testable priors only. The system should ask for schedule flexibility and learn from actual choices.

### 2. Optimize completed value, not clicks

The Netflix case warns that a personalized presentation can increase clicks while misleading the user and damaging completion. For sport booking, the equivalent outcome is a completed, attended booking and repeat use, not an offer click.

### 3. Recommendation diversity is a marketplace requirement

The Amazon and Spotify cases identify popularity bias and over-familiarity. A pure conversion ranker would repeatedly favor established peak venues. Re-ranking should preserve relevant exploration for new venues, alternative times, and different value options.

### 4. Diagnose before recommending

The Squirrel AI case emphasizes granular diagnosis before delivery. The app should determine whether the user's binding constraint is time, price, distance, venue quality, or missing partners before assuming a discount is useful.

### 5. Structure around intent

The LifeSG case supports organizing around the user's goal rather than internal venue or feature structure. Entry points should be intent-oriented, such as:

- "Book my usual game"
- "Find the best value"
- "I need players"
- "Notify me if this time opens"

### 6. Use a bounded recommendation architecture

The recommendation-history context supports:

1. Candidate retrieval using hard constraints.
2. Ranking using preference, behavior, context, and quality.
3. Re-ranking for inventory validity, owner rules, diversity, exploration, and fairness.

This is more appropriate than using an LLM as the core recommendation or pricing engine.

### 7. Human control applies to owners and players

AI-in-practice guidance favors copilot behavior. Owners should approve or bound campaigns through floors, caps, dates, and inventory limits. Players should be able to change preferences, use generic sorting, and inspect why a recommendation appears.

## Artifact Corrections

- Reduced personas from four to one primary and two secondary; deferred the solo-player persona until research validates that segment.
- Narrowed the prototype from an end-to-end player and owner simulation to one test of schedule/value recommendation acceptance.
- Reframed roadmap entries as outcomes instead of implementation tasks.
- Added exploration, popularity-bias controls, and attended-booking outcomes to recommendation requirements.
- Added this evidence audit and explicit confidence limitations.

## Remaining Research Gaps

Owner-provided assumptions now cover:

- Modeled occupancy: 70% after 18:00 on weekdays, 100% after 16:00 on weekends, and 40% at other times
- Price: 120,000 VND per court-hour
- Variable cost: 60,000 VND per booked court-hour
- Minimum meaningful discount: 5%
- Constraint priority: schedule, distance, price, partner availability
- Pickleball and badminton differences: none assumed

These inputs are encoded in `10_operating_model.md` and `data/assumptions.csv`. They remain assumptions until reconciled with booking records.

Still unresolved:

- Constraint percentages; only priority order is known
- Cancellation/no-show definition; the supplied phrase is ambiguous
- Owner commission tolerance
- Booking-channel fragmentation and inventory synchronization burden
- City and neighborhood liquidity requirements
- Actual opening hours; the model assumes 06:00-22:00

## Recommended Discovery Evidence

1. Interview 12-15 players across organizers, flexible players, and solo players.
2. Interview 5-8 venue operators and inspect at least four weeks of actual schedules.
3. Run a concierge test that manually offers adjacent times and nearby venues.
4. Measure selection, completed booking, attendance, realized price, and repeat intent.
5. Use a holdout group before attributing occupancy lift to personalization.
