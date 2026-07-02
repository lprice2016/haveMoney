---
name: hm-product-gate
description: Product validation and gatekeeping for 等我有钱了 / haveMoney. Use when Codex is asked to judge a product idea, define MVP scope, decide whether to build, run office-hours style analysis, or prevent premature coding for this project.
---

# HM Product Gate

## Purpose

Use this skill before implementation. Decide whether an idea deserves product work, content validation, H5 implementation, App implementation, or rejection.

## Required Context

Read only what is needed:

- `AGENTS.md` for project rules.
- `docs/03-gstack-codex-mode.md` for the GStack-to-Codex workflow.
- `docs/03-office-hours.md` for current product framing.
- `docs/04-plan-ceo-review.md` for the latest CEO decision.

## Workflow

1. Restate the user's request as a product bet, not a feature list.
2. Identify the emotional job: fantasy, relief, self-expression, humor, social signaling, or healing.
3. Ask whether the idea creates shareable expression or only a toy interaction.
4. Check the "garbage app" failure mode: random money, cards, buttons, no personal expression, no share motive.
5. Decide one of:
   - `reject`: do not build.
   - `content-test`: generate examples and test reactions.
   - `h5-spike`: build a one-page shareable generator.
   - `app-spike`: build mobile only after content evidence exists.
6. Produce a short gate report with: decision, why, evidence needed, next action, and explicit non-goals.

## Rules

- Do not recommend App development before content validation passes.
- Prefer a narrower wedge over a full product.
- Treat the existing Expo app as a spike, not the product direction.
- If the request touches real money, loans, investment, rankings, or gambling-like mechanics, route to `$hm-risk-review`.

## Output Shape

```markdown
**Decision**
content-test | h5-spike | app-spike | reject

**Why**
...

**User Emotion**
...

**Evidence Needed**
...

**Next Action**
...

**Do Not Build Yet**
...
```
