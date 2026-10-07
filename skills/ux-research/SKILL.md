---
name: ux-research
description: Fast UX research for a startup — desk research of reviews and discussions, JTBD, short interviews, prototype usability testing, synthesis into insights. Use at the Empathize and Define stages when you need to understand user pains, test an assumption from the brief, or prepare a prototype test. Even if the user just asked "so what do people actually need".
---

# UX-research

The goal of research in a fast startup isn't to "learn everything" but to find enough to frame the problem and not build a prototype on nothing. Research is done when it stops yielding anything new, not when every source has been covered.

## Budget by task class

| Class | Sources | Interviews | Stop criterion |
|---|---|---|---|
| Quick | 2–3 | no | all sources covered |
| Standard | 5 | no | three sources in a row yielded no new pain |
| Critical | 8–10 | 3–5 | same + interviews added no new JTBD |

Over budget — stop and report to the orchestrator.

## Desk research: where to look

In descending order of value for an AI startup:
1. Competitor reviews in the App Store / Google Play — filter to 1–3 stars, that's where the pains are.
2. Reddit (subs on the topic and on AI tools), Product Hunt — comments under competitor launches.
3. Twitter/X — complaints and "I want a tool that…".
4. Discussions in Discord/Telegram communities, if they're open.
5. G2 / Capterra for B2B.
6. Reports and articles — last, they're about the market, not about pains.

No more than 15 minutes of reading per source. Record quotes verbatim with a link; keep your own interpretations separate.

## JTBD

Phrase it like this:
```
When <situation / trigger>,
I want to <motivation>,
so I can <outcome>.
```
One job per persona, not five. If there are several jobs, pick the one closest to the hypothesis from the brief; the rest go to the backlog.

## "How might we"

`How might we <help whom> <do what> <under what constraint>?`
Narrow enough to generate ideas, broad enough not to suggest a solution. "How might we make the button more visible" — bad, that's a solution. "How might we help a newcomer get a first useful answer within a minute" — good.

## Interviews (Critical)

Five questions, 20 minutes, no more:
1. Tell me about the last time you <did the task>. What happened before, what happened after?
2. What's the most annoying part of it?
3. What have you tried to solve it? Why did you drop it / keep it?
4. If it worked perfectly, what would the result look like?
5. How much do you pay (in time or money) for this now?

Don't ask "would you use our product" — people say "yes" out of politeness. Ask about past behavior, not the future.

## Prototype usability test

Three people, 15 minutes each. Give a core-flow task in the user's words, not the interface's ("find how to get a summary of an article", not "tap Summarize"). Stay silent. Record: where they stopped, what they said out loud, whether they reached the end, what they tried to do wrong. Afterwards — questions 2 and 4 from the interview.

## Synthesis

An insight has three parts, not one:
```
Observation: what we saw (with source / quote)
Why it matters: how it relates to the hypothesis
What we do: one action — an idea, a screen, copy, or "nothing, but we watch it"
```

Honesty rules:
- Don't draw conclusions about "everyone" from three reviews. Write "3 of 5 sources".
- Tag every assumption about a pain: `[from source]` or `[hypothesis]`.
- Don't smooth over contradictions between sources — record both.
- If research refuted the hypothesis from the brief, that's not a failure, it's a result. Report it to the orchestrator; they'll raise a gate.

## Output format

In `ux-brief.md`, section "Research":
```
## Research
Sources: list with links
Persona and JTBD: …
Pains (by priority): 3–5 of them tagged [from source]/[hypothesis]
How might we: …
What wasn't confirmed: …
```
