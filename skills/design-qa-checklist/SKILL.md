---
name: design-qa-checklist
description: Checklist and report format for checking a coded prototype against the Figma design — four layers (tokens, component states, visuals of key screens, flows and events), severity criteria, a qa-report.md template. Use whenever you need to verify that the implementation matches the design, find discrepancies between Figma and code, or prepare a QA report, even for a single screen.
---

# Design-QA-checklist

The "Figma ↔ code" check has to be cheap and repeatable, otherwise people stop doing it. So automation comes first, then a structural check, and only then eyes — on a few key screens, not on everything.

## Layer 1. Tokens — script

```
node starter-kit/scripts/check-tokens.js   # Figma Variables ↔ tokens.css
node starter-kit/scripts/lint-tokens.js    # hardcoded values in src/
```

What goes into the report:
- token value differs (light or dark) — visual
- token exists in Figma but not in code — visual; if it's used in a core-flow component — blocker
- token exists in code but not in Figma — minor (but ask builder where it came from)
- hardcoded color / size / radius in a component — visual

## Layer 2. Component states

For each row of `component-map.md`:
- [ ] all variants from Figma exist in code (by name)
- [ ] no states in code that aren't in Figma (minor, but log it)
- [ ] for AI components: `streaming`, `error`, `low-confidence`, `empty` are present
- [ ] disabled / loading are not just "grey" — they match the variant in Figma

A missing core-flow state is a blocker. Everything else is visual.

## Layer 3. Visuals of key screens

Key = core-flow screens from `task-brief.md`. Quick — 1, Standard — 3–5, Critical — all.

A Figma screenshot and a prototype screenshot in the same viewport, side by side. Check against the list, not "looks similar overall":
- [ ] structure: the same blocks, in the same order
- [ ] hierarchy: heading / body / supporting text are distinguishable the same way
- [ ] spacing: matches the scale; large discrepancies (>1 scale step) — visual
- [ ] colors: from tokens, light and dark theme
- [ ] typography: roles match (h1 in code = h1 in Figma)
- [ ] screen states: empty, loading, error are implemented and look as in Figma
- [ ] responsive: nothing breaks on a mobile viewport (if the platform is web)

Not a pixel diff. Differences in anti-aliasing or font rendering are not discrepancies.

## Layer 4. Flows and events

Walk the core-flow from the first step to the last:
- [ ] the flow can be completed with no dead ends
- [ ] at every step an event from the metrics tree fires, its name identical to `ux-brief.md`
- [ ] event parameters are filled in (not `undefined`)
- [ ] AI metrics (time to first token, full response, error) are recorded
- [ ] failure scenarios from fixtures show the correct states

Flow can't be completed or an event didn't fire — blocker.

## Severity

| Severity | Criterion |
|---|---|
| blocker | flow can't be completed; a core-flow state is missing; an event doesn't fire; a core-flow component's token is missing |
| visual | discrepancy in a token, spacing, color, a non-core-flow variant, hardcoded values |
| minor | everything else, including extras in code |

## qa-report.md template

```
# QA-report — <project>, <date>

## TL;DR
Blockers: N · Visual: N · Minor: N
Core-flow completes: yes / no (where it stopped)
Events: N of M fired

## Discrepancies
| # | Severity | Screen / component | Figma node ID | File | What's wrong | What's expected |
|---|---|---|---|---|---|---|

## Layer 1 — tokens
script results

## Layer 2 — states
table component → missing variants

## Layer 3 — screens
per screen: what was checked, what was found

## Layer 4 — flows and events
step by step: step → event → status

## Not checked and why
```

The report goes to the orchestrator. QA doesn't fix things and doesn't suggest who should fix them — this is a gate for the user.
