---
name: ai-behavior-spec
description: Specification of AI behavior in a product — what the model does, inputs and outputs, latency, failure scenarios (error, refusal, low confidence, empty result), response editability, limits and cost. Use at the Define stage for any product that has generation, chat, an agent or model recommendations, and when creating fixtures in Builder. Even if the AI seems like "just one button", the failure scenarios are still needed.
---

# AI-behavior-spec

In an AI product the model is the main participant in the interface, and its behavior has to be designed just like the screens. Most AI-startup failures at the prototype stage are not "the model answers badly" but "the interface didn't explain what's happening when the model is thinking, making mistakes or refusing".

## Checklist for the "AI behavior" section in ux-brief.md

Fill in every item. If an item doesn't apply, write "not applicable, because…" instead of skipping it.

**1. Model's job.** In one sentence: what it does for the user. Not "generates text" but "turns a voice note into a task list with deadlines".

**2. Input.** What the user provides: text, a file, voice, context without actions. Required and optional fields. Examples of real input — 2–3 of them, including a bad one (empty, too long, off-topic).

**3. Output.** Format: free text, structure (list, table, JSON), file, action. An example of good output. What the user can do with it: copy, edit, regenerate, pass it on.

**4. Latency.** Expected time to first token and to the full response. What we show during that time: skeleton, "thinking" with stages, streaming. The threshold after which we show "this will take longer than usual".

**5. Streaming.** Yes / no. If yes — can it be stopped, and what happens to the partial response when it's stopped.

**6. Failure scenarios** — for each: what the user sees and what they can do.
- Network / API error.
- Model refusal (topic, policy).
- Low confidence — how the model signals it and how we show it.
- Empty or useless result.
- Input too long, context limit.
- Hallucination — what we do so the user can verify (sources, highlighting, "check this").

**7. Editability.** Can the user edit the response in place? Regenerate part of it? Refine the prompt without losing context? This directly affects trust — and it's a metric.

**8. Memory and history.** Does the model remember previous requests within a session? Across sessions? Does the user see the history?

**9. Limits and cost.** How many requests are free, what we show when they run out, whether the user sees the cost.

**10. Trust and transparency.** Do we label content as generated? Do we show sources? What do we say about user data?

## What goes into fixtures

Builder makes one file per scenario in `fixtures/ai/`:

| File | Scenario | What the spec defines |
|---|---|---|
| `success.json` | normal response with streaming | output example, latency from item 4 |
| `slow.json` | slow response | threshold from item 4 |
| `error.json` | API error | text and action from item 6 |
| `refusal.json` | refusal | text from item 6 |
| `low-confidence.json` | low-confidence response | signal from item 6 |
| `empty.json` | empty result | from item 6 |

File format — see `starter-kit/fixtures/ai/success.json` as a sample.

## Common mistakes

- Designing only the happy path. Failures are half the screens of an AI product.
- "Thinking…" with no progress for longer than 3 seconds — the user leaves. Show stages or streaming.
- Not letting the user edit the response — they copy it elsewhere and don't come back.
- Hiding that content comes from AI. Trust drops harder when the deception is discovered.
