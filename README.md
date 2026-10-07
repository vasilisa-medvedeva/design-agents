# Design agents — a team for fast AI-startup work

Five agents and seven skills for Claude Code. You stay in control of every stage through a Decision Gate; the agents prepare the context and the options.

## Install

```bash
./install.sh                  # agents and skills → ~/.claude (global, for all projects)
./new-project.sh ~/my-startup # project folder from the starter-kit
cd ~/my-startup && claude
```

First message in Claude Code: describe the idea. From there, `orchestrator` runs `ux` on the brief and brings you the first gate.

If Claude Code doesn't accept `model: claude-fable-5-1` in `agents/orchestrator.md`, replace it with `opus` and check the current alias in the docs.

## What's where

```
agents/        orchestrator (Fable) · ux · ui · builder · qa
skills/        mobbin-refs · ux-research · idea-generation · interaction-patterns
               ai-behavior-spec · design-qa-checklist · product-metrics
starter-kit/   CLAUDE.md · templates/ (9 artifacts) · scripts/ (lint-tokens, check-tokens)
               fixtures/ai/ (6 scenarios) · refs/
```

| Agent | Role |
|---|---|
| `orchestrator` | Breaks the task down, assigns it to ux / ui / builder / qa, picks a model per subtask, checks quality, brings decisions to you. Never does design or engineering work itself. |
| `ux` | Brief, design thinking (Empathize → Define → competitor research → Ideate), AI behavior spec, metrics tree, low-fi wireframes in Figma. |
| `ui` | References, moodboard directions, tokens in Figma Variables, components with all states, screens. |
| `builder` | Interactive code prototype from Figma: tokens, 1:1 components, interaction spec (HIG + Material 3), AI response fixtures, event tracking. |
| `qa` | Checks the prototype against Figma in layers (tokens → component states → key screens → flow and events). Reports, doesn't fix. |

## Process

```
Brief ▸ gate ▸ Empathize ▸ Define (+AI behavior, metrics) ▸ checkpoint ▸ gate
▸ Competitors (Mobbin) ▸ Ideas ▸ gate ▸ Wireframes ▸ gate
▸ Element refs ▸ Moodboard (2 directions) ▸ gate ▸ Tokens ▸ checkpoint ▸ Components ▸ gate ▸ Screens ▸ gate
▸ Tokens to code ▸ Component map ▸ checkpoint + architecture gate ▸ Interaction spec (motion gates)
▸ AI fixtures ▸ Build ▸ Tracking
▸ QA in 4 layers ▸ gate ▸ Test ▸ Metrics report ▸ gate ▸ What goes into the kit ▸ gate
```

The task class (Quick / Standard / Critical) sets the budgets — see the table in `agents/orchestrator.md`.

## Growing the kit

After each project the orchestrator brings a "what do we keep" gate. Copy the chosen pieces into `starter-kit/` by hand: tokens into the `ui-spec.md` template, components into `starter-kit/components/` (create it), motion decisions into `templates/interaction-registry.md`.

## Limitations to keep in mind

- Agents don't see each other's conversations — only files. Anything not written down is lost.
- Mobbin and Pinterest go through the browser (Claude in Chrome) and need a login.
- Writing to Figma via `use_figma` — check how far it goes on your first project.
- `check-tokens.js` expects the JSON that QA saves from `get_variable_defs`; the format is described in the script's comment.
