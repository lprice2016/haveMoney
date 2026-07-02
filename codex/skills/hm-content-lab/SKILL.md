---
name: hm-content-lab
description: Content generation and scoring for 等我有钱了 / haveMoney. Use when Codex needs to create, compare, score, rewrite, or validate viral phrases, share-card copy, rich-dream prompts, wealthy-trouble jokes, or emotional content samples for this project.
---

# HM Content Lab

## Purpose

Generate and evaluate the content that proves whether the product is worth building.

The content is the product until validation says otherwise.

## Required Context

Read as needed:

- `docs/05-content-validation-plan.md` for current sample sets and scoring.
- `docs/06-plan-design-review.md` for voice and share-card rules.
- `docs/08-risk-review.md` for forbidden wording.

## Content Modes

Use one of three modes unless the user asks otherwise:

- `wish-fulfilled`: "等我有钱了，我要..." becomes an already-realized scene.
- `wealthy-trouble`: a real-life annoyance becomes an absurd rich-person annoyance.
- `self-reward`: money fantasy becomes permission to rest, choose, or be kinder to oneself.

## Generation Rules

- Start from user emotion, not luxury objects.
- Keep each output short enough for a share card.
- Make the line easy for friends to continue.
- Prefer concrete contrast over generic wealth.
- Avoid real financial claims, payments, balances, loan language, and investment framing.

## Scoring Rubric

Score every candidate 1-5:

- 1: awkward or unsafe.
- 2: understandable but flat.
- 3: mildly relatable.
- 4: shareable or easy to reply to.
- 5: immediately group-chat worthy.

## Output Shape

For generation:

```markdown
| # | Mode | Copy | Score Guess | Why |
| --- | --- | --- | --- | --- |
```

For evaluation:

```markdown
**Winners**
...

**Weak Lines**
...

**Risky Lines**
...

**Rewrite Direction**
...
```
