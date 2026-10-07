---
name: product-metrics
description: Metrics for testing an AI startup's hypothesis — a North Star → leading metrics → events tree, a catalog of standard events for AI products, naming rules, a "hypothesis confirmed" threshold, a plan/actual report template. Use when you need to define the success metric in the brief, design tracking, verify that events fire, or sum up a prototype test. Even if the user just asked "how will we know it worked".
---

# Product-metrics

A prototype exists to get a number that confirms or refutes the hypothesis. If there's no number after the test, the test didn't happen. So the metric is designed before the screens, not after.

## Responsibility

| Who | What |
|---|---|
| ux | metrics tree and event list in `ux-brief.md`, confirmation threshold |
| builder | analytics layer, events in code, AI metrics |
| qa | every event fires at its step |
| orchestrator | `metrics-report.md` after the test, the "what's next" gate |

## Metrics tree

Three levels, no more:

```
North Star: one value metric — what the user got
  └ Leading 1: what predicts the North Star (2–3 of them)
      └ Events: what we actually log
```

Example for "one-click article summary":
```
North Star: user saved or sent the summary (completed_value)
  ├ Share of sessions that reached a result (activation)
  │   └ prompt_submitted → result_shown → result_saved
  ├ Share of results that were edited (trust)
  │   └ result_edited, result_regenerated
  └ Return the next day (retention)
      └ session_started with returning=true
```

The success metric in the brief is the North Star or one leading metric. Not five.

## Confirmation threshold

Write it down before the test: "The hypothesis is confirmed if <metric> ≥ <value> for <N> of <M> participants". The number can come from competitor benchmarks, research or common sense — but it must be written down before the test, otherwise after the test it gets fitted to the result.

## Event catalog for AI products

Standard names — use them, don't invent your own. `snake_case`, verb in the past tense.

**Session and activation**
- `session_started` {returning: bool, source}
- `onboarding_completed` {steps_seen}
- `empty_state_example_clicked` {example_id}

**Input**
- `prompt_submitted` {length, has_attachment, input_type}
- `prompt_cleared`

**AI response**
- `ai_request_started` {model, scenario}
- `ai_first_token` {latency_ms} — time to first token
- `ai_response_completed` {latency_ms, tokens, scenario}
- `ai_response_failed` {error_type} — network, refusal, limit
- `ai_response_stopped` {progress_pct} — the user stopped streaming
- `ai_low_confidence_shown`

**Trust and result**
- `result_edited` {edit_ratio}
- `result_regenerated` {reason}
- `result_copied` / `result_saved` / `result_shared` {destination}
- `result_feedback` {value: up|down, reason}
- `source_clicked` {source_id}

**Limits**
- `limit_reached` {limit_type}
- `upgrade_clicked` {placement}

Required context in every event: `session_id`, `screen`, `timestamp`, `variant` (if A/B).

## Rules

- One event = one user action or one system reaction. Not `user_did_stuff`.
- The event name in the brief, in the code and in the QA report — identical.
- Don't log the content of prompts and responses in events — only lengths and types.
- Computed metrics (shares, averages) are not events; they're calculated from events.

## metrics-report.md template

```
# Metrics-report — <project>, <date>

## TL;DR
Hypothesis: <from the brief>
Threshold: <from the brief>
Outcome: confirmed / not confirmed / insufficient data

## Plan / actual
| Metric | Plan | Actual | Participants | What it means |
|---|---|---|---|---|

## AI metrics
| Metric | Value | Comment |
| time to first token (p50/p90) | | |
| full response time (p50/p90) | | |
| error rate | | |
| response edit rate | | |

## Observations from the test
what we saw, what we didn't expect

## What's next — options for the gate
A / B / C with the cost of each
```
