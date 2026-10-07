# <Project name>

## Context

This is a fast AI startup. The goal is to test one hypothesis with a prototype, not to build a product.

- One core flow. Anything that doesn't test it goes to the backlog with a tag.
- Task class: **<Quick / Standard / Critical>** — sets the budgets for research, refs, ideas and QA depth. See `project-state.md`.
- The user makes decisions at the Decision Gate. Agents prepare context and options; they don't decide for the user.
- Work exists only if it is recorded in an artifact. Before starting, each agent reads `task-brief.md`, `decisions.md` and the previous stage's artifact.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind + shadcn/ui (Radix)
- Framer Motion for motion
- Tokens: Figma Variables → `src/styles/tokens.css`, the single source of styles
- AI: mock adapter `src/lib/ai/adapter.ts`, fixtures in `fixtures/ai/`
- Analytics: `src/lib/analytics.ts`; in the prototype — console + localStorage

## AI-native by default

Streaming responses, "thinking / unsure / error / refusal" states, editable output, history, an empty state with example prompts, visible limits.

## Team

`orchestrator` (Fable) → `ux` (Opus) → `ui` (Opus/Sonnet) → `builder` (Opus/Sonnet) → `qa` (Sonnet). Always launch through `orchestrator`.

## Artifacts

`task-brief.md` → `ux-brief.md` → `ui-spec.md` → `component-map.md` → `interaction-registry.md` → `qa-report.md` → `metrics-report.md`. Cross-cutting: `decisions.md`, `project-state.md`. Templates in `starter-kit/templates/`.

## Code rules

- No raw color/size/radius values — tokens only. `npm run lint:tokens` must pass.
- Component in code = component in Figma, same name, same variants.
- Identical elements behave identically — see `interaction-registry.md`.
- Don't add dependencies without a gate.
