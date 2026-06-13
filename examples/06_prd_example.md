# Product Requirements Document (PRD): LMS Career Pathway Builder

## Objective
To provide high school students with hyper-personalized college major and career recommendations directly within their LMS, utilizing their historical academic data and real-time labor market trends.

## Target Audience
**Primary:** High school Sophomores and Juniors.
**Secondary:** High School Guidance Counselors.

## Value Proposition
Replaces generic, once-a-year aptitude tests with a dynamic, data-driven career roadmap that updates in real-time as a student's academic performance and interests evolve, reducing anxiety and increasing college-readiness.

## User Stories / Requirements
*   **As a student**, I want to take a fast, engaging interest assessment so that I don't get bored and abandon the process.
*   **As a student**, I want to see exactly *why* a career was recommended to me (e.g., "Because you excel in Math and selected 'Helping People'") so that I trust the AI's suggestion.
*   **As a student**, I want to view the projected 10-year job growth and average starting salary for recommended careers so that I can make financially informed decisions about my college major.
*   **As a guidance counselor**, I want to see an aggregated view of my students' top saved careers so that I can plan relevant college fair visits.

## Scope
*   **In Scope:** 
    *   Interactive swipe-based UI for interest gathering.
    *   AI recommendation algorithm matching user profiles to majors.
    *   Data visualization for Market Opportunities (Salary, Growth via 3rd party API).
    *   Student-facing dashboard.
*   **Out of Scope:** 
    *   Direct integration with college application portals (e.g., CommonApp).
    *   Alumni networking features.

## Dependencies & Assumptions
*   **Technical Dependency:** Requires successful integration with the Lightcast/Burning Glass API for real-time labor market data.
*   **Business Assumption:** We assume school districts will allow us to utilize anonymized student grade data to train the initial recommendation weights, compliant with FERPA regulations.
