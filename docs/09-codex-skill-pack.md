# Codex Skill Pack

## 目标

把 `garrytan/gstack` 改造成适合 Codex 和“等我有钱了”的两层架构：

- GStack 通用层：负责软件工厂流程。
- HaveMoney 项目层：负责产品判断、内容验证、传播、风险、设计和交付门禁。

## 为什么不直接复制 gstack

上游 gstack 的技能很强，但对本项目过大：

- 单个技能可能包含上千行上下文。
- 很多能力面向通用工程，不是当前阶段最重要的问题。
- 当前项目最大风险是产品不成立，而不是工程不会写。

因此本项目保留 gstack 的流程思想，但把项目技能做小：

- 触发清楚。
- 每个 skill 只管一个决策面。
- 详细背景放在 `docs/`，按需读取。
- 先门禁，后开发。

## Skill 列表

| Skill | 职责 | 何时使用 |
| --- | --- | --- |
| `$hm-product-gate` | 产品立项与是否开工 | 判断想法、MVP、是否值得做 |
| `$hm-content-lab` | 内容生成与评分 | 生成“等我有钱了”样例、评分、改写 |
| `$hm-growth-loop` | 传播实验 | 设计微信群、朋友圈、小红书测试 |
| `$hm-design-language` | 语气和分享卡 | 定义文案气质、卡片结构、视觉方向 |
| `$hm-risk-review` | 风险审查 | 审查金融、博彩、游戏、未成年人风险 |
| `$hm-delivery-gate` | 实现门禁 | 决定 no-build、content-test、H5、App |

## 推荐调用顺序

### 新想法

1. `$hm-product-gate`
2. `$hm-risk-review`
3. `$hm-content-lab`

### 内容验证

1. `$hm-content-lab`
2. `$hm-growth-loop`
3. `$hm-design-language`
4. `$hm-risk-review`

### 准备实现

1. `$hm-product-gate`
2. `$hm-delivery-gate`
3. `gstack-plan-eng-review`
4. `gstack-qa` 或 Codex Browser QA

## 决策规则

默认不写代码。

只有 `$hm-delivery-gate` 输出 `h5-spike` 或 `app-spike`，并且用户明确要求实现，才进入工程。

当前 Expo 原型不作为主线。它只能在 `$hm-delivery-gate` 明确选择 `app-spike` 后继续使用。

## Codex 安装方式

项目源文件在：

`codex/skills/`

为了让 Codex 自动发现，可将这些目录链接到：

`~/.codex/skills/`

每个 skill 只需要：

- `SKILL.md`
- `agents/openai.yaml`

当前不需要脚本、模板或复杂资产。
