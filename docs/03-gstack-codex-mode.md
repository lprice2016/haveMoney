# GStack Codex Mode

## 目标

把 `garrytan/gstack` 的创业软件工厂方法转换成 Codex 可执行模式，用于开发“等我有钱了”。

上游 gstack 是面向 Claude Code 的 slash-command skill 系统。Codex 中不直接使用 slash command，而是把每个 command 转成项目文档、门禁和任务流程。

## 上游能力映射

| GStack command | Codex 项目模式 | 用途 |
| --- | --- | --- |
| `/office-hours` | `docs/03-office-hours.md` | 先讨论产品，不写代码 |
| `/plan-ceo-review` | `docs/04-plan-ceo-review.md` | 判断方向是否值得做 |
| `/plan-design-review` | `docs/05-plan-design-review.md` | 判断视觉、文案、传播性 |
| `/plan-eng-review` | `docs/06-plan-eng-review.md` | 判断实现路径、测试和上架约束 |
| `/autoplan` | 四段 review 串联 | 自动跑完整计划门禁 |
| `/review` | Codex code review stance | 代码进入合并前审查 |
| `/qa` | 浏览器/真机验证 | 验证真实用户路径 |
| `/ship` | 测试、提交、推送 | 发布前闭环 |
| `/retro` | `docs/retro/` | 记录错误判断与下一步 |

## 项目技能层

GStack 不直接承担“等我有钱了”的业务判断。项目业务由 6 个 Codex skills 承担：

| Project skill | 对应 GStack 阶段 | 职责 |
| --- | --- | --- |
| `$hm-product-gate` | `/office-hours` + `/plan-ceo-review` | 判断方向是否值得做 |
| `$hm-content-lab` | `/office-hours` | 生成和评分内容样例 |
| `$hm-growth-loop` | `/plan-ceo-review` | 验证传播和分享闭环 |
| `$hm-design-language` | `/plan-design-review` | 定义语气、分享卡和视觉表达 |
| `$hm-risk-review` | `/cso` + project review | 审查金融、游戏、博彩和内容风险 |
| `$hm-delivery-gate` | `/plan-eng-review` | 决定是否进入 H5 或 App 实现 |

优先使用项目 skill，再调用通用 gstack skill。原因是本项目当前阶段的最大问题是产品判断和传播验证，不是工程自动化。

## 本项目门禁

### Gate 0: 不写代码

除非用户明确说“实现/开发/写代码”，否则所有新想法先进入产品判断。

### Gate 1: 不是垃圾 App

任何 MVP 必须回答：

- 它是不是只是随机金额 + 几张卡片？
- 用户为什么会第二次打开？
- 用户为什么愿意分享？
- 分享出去是否像梗、愿望、情绪出口，而不是尴尬炫富？

### Gate 2: 上架安全

不得触发金融、博彩、真实赚钱、游戏版号和未成年人高风险。

### Gate 3: 最小闭环

只允许一次验证一个核心闭环：

- 输入愿望 -> 生成结果 -> 分享
- 选择身份 -> 生成今日富豪人生 -> 分享
- 写现实烦恼 -> 转成有钱后的荒诞烦恼 -> 分享

### Gate 4: 实现

通过前面门禁后再实现。实现必须有验收标准、测试命令和回滚方式。

## 当前行动

当前行动不是继续开发 Expo 原型，而是完成：

1. Office Hours
2. CEO Review
3. 内容传播样例
4. 最小闭环选择
5. 再决定是否保留、重写或删除现有原型
