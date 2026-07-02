---
name: hm-delivery-gate
description: Implementation readiness and delivery planning for 等我有钱了 / haveMoney. Use when Codex decides whether to build H5, mobile app, prototype, tests, or deployment; gates coding until product, content, design, engineering, and risk reviews are satisfied.
---

# HM Delivery Gate

## Purpose

Prevent premature engineering. Choose the smallest safe build after validation.

## Required Context

Read as needed:

- `docs/04-plan-ceo-review.md`
- `docs/05-content-validation-plan.md`
- `docs/06-plan-design-review.md`
- `docs/07-plan-eng-review.md`
- `docs/08-risk-review.md`

## Build Readiness Checklist

Only recommend implementation when all are true:

- A content direction has won: `wish-fulfilled`, `wealthy-trouble`, or `self-reward`.
- At least 10 examples scored 4+ in lightweight testing.
- At least 3 examples scored 5 or generated strong replies.
- Risk review is `pass` or all required changes are clear.
- The first build can be one narrow loop.

## Preferred Build Order

1. No-code/content test.
2. Single-page H5 generator.
3. Share-card image generation.
4. Lightweight storage/history.
5. Mobile app only after H5 evidence.

## Existing Expo Spike

Treat `App.tsx` and related Expo files as a spike. Do not continue building on them unless the delivery decision explicitly says `app-spike`.

## Output Shape

```markdown
**Delivery Decision**
no-build | content-test | h5-spike | app-spike

**Why**
...

**Smallest Build**
...

**Files Allowed To Change**
...

**Validation Required**
...

**Rollback**
...
```
