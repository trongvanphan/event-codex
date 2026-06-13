# Product Artifacts: Establishing Boundaries

To ensure high quality, product artifacts must be bounded. "Bounding" an artifact means applying strict constraints on what it should and should *not* contain. Without boundaries, documents become bloated, unreadable, and lose their strategic value.

## 1. Persona Boundaries: Relevance over Fiction
*   **The Constraint:** Only include details that have a direct, logical impact on how the user will discover, purchase, or interact with your specific product.
*   **Quality Check:** For every bullet point on your persona, ask: *"Does knowing this change a design or engineering decision we will make?"* If the answer is no, delete it.
*   **Example:** If you are building a B2B cybersecurity tool, knowing the persona's favorite pizza topping is noise. Knowing that they report directly to a non-technical CEO is highly relevant (it means the dashboard must generate simple executive summaries).

## 2. PRD Boundaries: The "What" and "Why", Not the "How"
*   **The Constraint:** The Product Manager owns the *Problem* (What we need and Why it matters). Engineering and Design own the *Solution* (How it is built and How it looks).
*   **Quality Check:** Search your PRD for technical jargon, database schemas, or explicit UI layout commands. Remove them and replace them with user-centric requirements.
*   **Example:** Instead of writing "Use a 3-column Postgres table," write "The system must load historical user data in under 2 seconds." Leave the database architecture to the engineers.

## 3. Prototype Boundaries: The Minimum Viable Test
*   **The Constraint:** A prototype is not the product. It is a disposable tool used to gather information. It should only encompass the exact flow needed to test your riskiest assumption.
*   **Quality Check:** Are you mocking up "Forgot Password" screens, "Terms of Service," or "Account Settings"? Stop. Unless your core value proposition is revolutionizing passwords, these screens are a waste of time during prototyping.
*   **Example:** If you are testing a new AI recommendation feed, the prototype should consist solely of the onboarding assessment and the resulting feed. Everything else is out of bounds.

## 4. Roadmap Boundaries: Outcomes over Outputs
*   **The Constraint:** The roadmap must bound itself to time horizons (Now/Next/Later) and strategic themes, not specific daily tasks or Jira tickets.
*   **Quality Check:** If an item on your roadmap can be completed by one engineer in two days, it is a task, not a roadmap item. Roadmap items should take weeks or months.
*   **Example:** "Implement Stripe API" is a task and belongs in a sprint backlog. "Enable Global Payments to open European Markets" is a strategic theme and belongs on the roadmap.
