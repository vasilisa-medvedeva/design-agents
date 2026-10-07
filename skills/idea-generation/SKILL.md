---
name: idea-generation
description: Structured generation and prioritization of product ideas — warm-up by reframing the problem, techniques (Crazy 8, SCAMPER, stealing from an adjacent industry, "AI does everything itself", "remove the screen"), quotas, an Impact × Effort × Confidence matrix, a top 3 and a backlog. Use at the Ideate stage when you need a pool of ideas for a core-flow, feature or screen, or when the user asks to "throw out some options". Even for small tasks — the quota is just smaller.
---

# Idea-generation

You need many ideas so that three good ones are among them. The first five are always obvious — anyone would have come up with them without us. Value appears after the tenth, once the obvious has run out.

## Quotas by task class

| Class | Minimum ideas | Of which "crazy" | In the top |
|---|---|---|---|
| Quick | 5 | 1 | 2 |
| Standard | 15 | 3 | 3 |
| Critical | 25+ | 5 | 3 |

A "crazy" idea is one you're embarrassed to show: it breaks the format, removes the interface, costs too much. It's not there to be built but to shift the frame.

## Step 1. Warm-up — three reframings

Take the "How might we" from the research and rewrite it three ways before coming up with anything:
- **Narrowing**: for one specific person in one specific situation.
- **Widening**: for everyone who has a similar job, even outside our domain.
- **Inversion**: how could we make the problem worse? — now flip each point.

Generate ideas for each framing separately — that way the pool doesn't fall into one rut.

## Step 2. Techniques — use at least three

- **Crazy 8**: eight ideas in a row without evaluating, one line per idea. Don't stop to improve.
- **SCAMPER on the core-flow**: for each step of the flow — substitute, combine, adapt, modify, put to another use, eliminate, reverse. Especially "eliminate": which step can be thrown out?
- **Stealing from an adjacent industry**: how is this job solved in banking, games, delivery, music? What transfers?
- **AI does it all**: what if the user enters nothing at all and AI does everything from context? What's left of the interface?
- **Remove the screen**: what if this screen didn't exist? Where does its function go?
- **From refs**: ideas taken from Mobbin — always with the tag `[mobbin: <product>]`. Borrowing is fine, hiding the source is not.

## Step 3. Evaluation

Rate each idea on three axes from 1 to 5 plus one flag:

| Axis | 1 | 5 |
|---|---|---|
| Impact | barely affects the metric | directly moves the success metric |
| Effort | hours | weeks (for a startup that means "no") |
| Confidence | pure guess | backed by data from research or refs |

Flag **"tests the hypothesis"**: yes / no. An idea with "no" can't make the top, however good it is — it goes to the backlog.

Rate honestly, not toward the result you want. If every idea got Impact 5, the evaluation is broken — redo it.

## Step 4. Top and backlog

Top — high Impact, low or medium Effort, flag "yes". For each top idea — one paragraph: what it is, why it moves the metric, what we're risking, where it came from.

Everything else goes to the backlog with tags: `[later]` good, but not now; `[needs-data]` Impact unclear; `[crazy]` frame-shifting; `[no]` doesn't test the hypothesis.

Don't choose between the top ideas yourself — this is a gate, the user decides.

## Output format

In `ux-brief.md`, section "Ideas":
```
## Ideas
Reframings: narrowing / widening / inversion
Techniques used: …

| # | Idea | Source | Impact | Effort | Confidence | Tests hypothesis | Status |
|---|---|---|---|---|---|---|---|

### Top 3
1. <idea> — rationale paragraph
2. …
3. …

### Backlog
- [later] …
- [crazy] …
```
