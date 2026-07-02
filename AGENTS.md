# 等我有钱了 Agent 协作准则

## GStack Codex Mode

本项目采用 `garrytan/gstack` 的软件工厂方法，但以 Codex 可执行的方式落地。

GStack 的上游形态是 Claude Code slash commands；在本仓库中转换成 Codex 工作模式：

- `/office-hours` -> `docs/03-office-hours.md`
- `/plan-ceo-review` -> `docs/04-plan-ceo-review.md`
- `/autoplan` -> CEO review + design review + engineering review + risk review 四段门禁
- `/review` -> Codex code-review stance
- `/qa` -> 浏览器/真机验证后再改代码
- `/ship` -> 测试、审查、提交、推送的发布流程
- `/retro` -> 每轮结束后记录错误判断、剩余问题和下一步

除非用户明确要求直接实现，否则本项目默认从 `/office-hours` 开始，不从代码开始。

## 当前项目状态

产品名：等我有钱了

当前定义：私人管家式有钱爽剧生成器

工程代号：`haveMoney`

当前已经存在一个 Expo 原型草稿。它只是 spike，不是已确认方向。后续不得在该原型上继续堆功能，除非产品门禁通过。

当前最高优先级产品文档：`docs/11-product-decision-ledger.md`。当旧文档与该文件冲突时，以产品决策总账为准。

## 产品边界

等我有钱了是一个情绪价值型娱乐应用。它把用户常说的“等我有钱了”转成一种可表达、可分享、可共鸣的私人管家式有钱爽剧。

它不是：

- 理财、贷款、投资或真实资产管理产品
- 真实赚钱、返利、提现或额度申请产品
- 博彩、抽奖、概率爆奖或充值虚拟现金包产品
- 单纯炫富、攀比、羞辱现实生活的工具

所有金额、资产、身份、账单和消费体验都必须被视为虚拟娱乐模拟。

## 强制工作流

任何较大的需求先过五步：

1. Office Hours：重述问题，判断是否值得做，找最强情绪钩子。
2. CEO Review：判断是否有 10-star 产品潜力，是否只是低质量玩具。
3. Design Review：判断是否有传播画面、文案语气、分享动机。
4. Engineering Review：判断最小实现、数据、测试、上架约束。
5. Risk Review：判断金融误导、游戏化、未成年人、消费诱导风险。

只有通过这五步，才允许进入实现。

## 当前最高优先级

先证明“等我有钱了”不是垃圾 App。

优先验证：

- 用户愿不愿意写下“等我有钱了，我要...”。
- 用户看到定制爽剧后有没有觉得爽。
- 用户是否愿意继续让管家安排下一段。
- 用户愿不愿意分享生成结果。
- 哪种结果更有传播性：私人管家式爽剧、段子、反讽、治愈、荒诞、身份生成。
- 产品是否应该是 App，还是先做 H5/小程序/图片生成器/内容账号。

## 项目 Skill Pack

本项目在 `codex/skills/` 维护 Codex 项目技能，并链接到 `~/.codex/skills` 后供 Codex 自动发现。

优先使用：

- `$hm-product-gate`：判断产品方向、MVP 和是否允许进入实现。
- `$hm-content-lab`：生成和评分内容样例。
- `$hm-growth-loop`：设计分享与传播验证。
- `$hm-design-language`：定义语气、分享卡和视觉表达。
- `$hm-risk-review`：审查金融、博彩、游戏、未成年人和内容风险。
- `$hm-delivery-gate`：决定 no-build、content-test、H5 或 App。

通用 gstack 技能只在需要对应软件工厂能力时使用，例如 `gstack-plan-eng-review`、`gstack-review`、`gstack-qa`、`gstack-ship`。

## 三省六部业务治理

GStack 负责通用软件工厂流程；三省六部负责本项目的业务分工。

三省：

- 中书省：产品立意、用户情绪、PRD、传播假设。
- 门下省：风险审查、反对意见、合规和价值观边界。
- 尚书省：任务拆解、工程落地、验收和复盘。

六部：

- 吏部：Agent/Skill 路由和协作规范。
- 户部：成本、收费、指标、分享闭环、是否允许进入实现。
- 礼部：管家语气、奢华细节、短剧分镜、分享战报。
- 兵部：增长实验、传播机制、竞品。
- 刑部：金融误导、隐私、未成年人、内容安全。
- 工部：客户端、服务端、数据、测试、发布。

## 开发规则

- 不在未经验证的方向上继续堆功能。
- 不把 App Store 高风险表达写进 UI：真实贷款、提现、收益、额度申请、投资回报。
- 不使用“黑卡真实开通”“财富自由方案”“躺赚”等金融化措辞。
- 不做抽卡、下注、彩票、老虎机或概率爆奖。
- 不继续开发当前 Expo 原型，除非 `docs/04-plan-ceo-review.md` 明确通过。
- 不进入工程实现，除非 `$hm-delivery-gate` 输出 `h5-spike` 或 `app-spike`。
- 有代码变更时必须跑对应测试；有前端变更时必须做浏览器或设备截图验证。
