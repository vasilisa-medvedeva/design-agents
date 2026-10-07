---
name: mobbin-refs
description: How to find and document references in Mobbin — by pattern, not "by looks". Use whenever you need examples of screens or elements from real products — competitor research, refs for an input / card / onboarding / empty state / streaming, analysis of how AI products solve a similar flow. Even if the user just said "see how others do it".
---

# Mobbin-refs

Mobbin is a library of real screens and flows. It has no public API, so the work goes through the browser (Claude in Chrome): the user must be logged in. If the browser is unavailable, say so — don't invent refs from memory.

## Why refs

A ref is there to **borrow a solution**, not to "get inspired". So we search by pattern and by job, not by style. A good ref answers the question "how did product X solve the same problem we have". A beautiful screen without that connection isn't a ref, it's noise.

## How to phrase the search

Mobbin searches by Patterns, Screens, Flows and Apps. Work in this order:

1. **Patterns → job.** Start with the Patterns section: `Onboarding`, `Empty state`, `Search`, `Chat`, `Input`, `Upsell`, `Settings`. For AI products, always look at `Chat`, `Prompt`, `Loading`, `Generation`.
2. **Filter by category and platform.** Category `AI` / `Productivity`, platform from the brief (iOS, Android, Web). Don't mix platforms: a bottom sheet on iOS and on Web are different things.
3. **The whole flow.** Found a screen — open the whole Flow to understand what comes before and after. A screen without context is no good.
4. **Apps.** If competitors are known from the brief, open them directly and walk through the core-flow.

Don't search for words like "beautiful", "modern", "minimalist". Search by the nouns of the job.

## Selection criteria

Take a ref if:
- the product launched or was updated recently (the last 1–2 years) — old patterns go stale;
- the flow is structurally similar to our core-flow, not just the topic;
- the solution is visible on screen, not implied.

Quantity — by task class from `project-state.md`: Quick — 1 per element, Standard — 2–3, Critical — 3–5. More is worse: it's harder to choose and adds no value.

## Budget

Site moves per element: Quick — 5, Standard — 10, Critical — 15. Over budget — stop, write down what you found, and report to the orchestrator. Don't push on.

## Ref card

Each ref uses this format, in the agent's artifact and with a screenshot file in `refs/<elements|competitors>/`:

```
### <Product> — <screen / pattern>
Link: <Mobbin url>
Screenshot: refs/elements/<product>-<pattern>.png
What it does well: one or two sentences
What we take: specifically what — layout, state, copy, motion
What we don't repeat: what and why
Platform: iOS / Android / Web
```

For competitor research, add the line `How they solve our core-flow:` — step by step, 3–6 points.

## Screenshots

Save a screenshot of the screen, not the whole Mobbin page. File name — `<product>-<pattern>.png`, Latin characters, no spaces. Screenshots are needed by the UI agent and by the user at the gate — without them the card is useless.

## What not to do

- Don't cite refs you haven't seen in the browser.
- Don't take more than the quota "just in case".
- Don't judge taste ("I like it"). Only the connection to the job.
- Don't copy screens one to one — we take the solution, not the pixels.
