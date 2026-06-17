# 设计原则 · 暗色电影编辑风（个人杂志）

> 本站于 2025 年从「温暖纸墨个人博客」改版为「暗房里的个人杂志」。
> 灵感来自 `south-by-locals.wanderlustmagazine.com` 的电影感编辑杂志语言：
> 纯黑画布上散落的做旧拍立得卡片、展示体大标题、等宽副标、手写体水印、
> 滚动视差与入场页。英文版见 `design-principles.md`。
>
> 旧的「Anthropic / Claude 纸感」方向已不再适用——若需查阅历史，见 git 历史。

## 1. 核心感觉

这个站点应该像：

- 一本在暗房里翻看的私人刊物。
- 一叠摊在黑桌面上、带胶带和手写注脚的拍立得。
- 一期只有一个人的杂志：内容即自我介绍，不需要大段自我陈述。

它不应该像：

- 浅色 SaaS 落地页或常规作品集模板。
- 霓虹赛博 AI 官网。
- 信息轰炸、卡片等权堆叠的页面。

## 2. 颜色（见 `styles/tokens.css`）

- 画布：纯黑 `--bg #060606` / 区块用 `--bg-pure #000`，叠加胶片颗粒 + 暗角。
- 纸卡：做旧米白 `--paper #f4efe3`，深墨字 `--paper-ink #1a1714`。
- 暗底文字：`--fg #f5f2ea`，弱化 `--fg-muted / --fg-faint / --fg-ghost`。
- 暖金点缀：`--gold #c8a25a`、`--cream #efe7d6`——只用于 kicker、徽章、引言高亮、链接。
- 胶带：`--tape`。阴影是暗色深投影 `--shadow-card`。

规则：金色稀有即有力；不要到处铺。层级靠明度 / 字重 / 间距 / 旋转，而非堆颜色。

## 3. 字体（免费近似 Adobe 原版，见 `styles/fonts.css` + tokens）

| 角色 | 变量 | 字体 |
|---|---|---|
| 展示 / 海报 / 大数字 | `--font-display` | Anton |
| 名片标题（拉丁） | `--font-name` | Archivo 700+ |
| 中文展示标题 | `--font-cjk-display` | 得意黑 Smiley Sans（CDN，回退 Noto Serif SC 700） |
| 等宽：副标 / 日期 / 标签 | `--font-mono` | Space Mono |
| 衬线斜体点缀 | `--font-serif-italic` | Fraunces italic |
| 手写：刊名 / 注脚 / 水印 | `--font-script` | Caveat |
| 中文正文 | `--font-cjk` | Noto Serif SC |

规则：等宽承担一切「元信息」与引言；展示体只在少数标题喊话；手写体是签名与注脚，点到为止。

## 4. 标志性组件

- **入场页 `IntroGate`**：做旧排版「海报」拼贴 + 中央金色圆形徽章（手写刊名 + 巨大刊题 + ENTER）。无音频。`sessionStorage` 记忆，避免返回重放。
- **拍立得卡片 `PolaroidCard`**：白纸框 + 暗色「照片」面板（kicker + 展示体标题 + 等宽说明）+ 底部白条（日期·标签 + 手写注脚）+ 胶带。轻微旋转，hover 扶正上浮。`accent`：paper / cream / sepia。
- **引言 `PullQuote`**：大号 CJK 衬线引言，关键词用金色高亮（`q-mark`）；金色大引号；等宽出处。measure 用 `rem`（不要用 `ch`——大字号下 `ch` 会算错）。
- **叠堆 `PolaroidDeck`**：滚入视图扇形展开，点卡置顶；移动端退化为竖直可读堆叠。
- **顶栏 `Chrome`** + **底部 `FooterCta`**：左手写刊名徽标 / 右导航 + 刊号；底部「END OF ISSUE」收尾。

## 5. 布局与运动

- 桌面：`MagazineFeed` 用 12 列网格的「band」散落放置卡片 / 引言 / 碎片（`slot--a..h` 控制列与垂直偏移 + 旋转），背后一枚巨大手写水印。
- 视差：`ScrollFx` 对 `[data-parallax]` 用独立的 `translate` 属性驱动（不与 `transform` 旋转冲突）；窄屏 / `prefers-reduced-motion` 下关闭。
- 揭示：复用 `Reveal`（IntersectionObserver，淡入上移）。
- 响应式：`<760` 时 band 转单列、卡片居中、叠堆竖排、视差关闭；务必无横向溢出。
- 全程尊重 `prefers-reduced-motion`（见 `styles/utilities.css`）。

## 6. 阅读页（`styles/post.css`）

暗色但**阅读优先**：黑底、浅墨正文（`Noto Serif SC`，对比 / 行距 / measure 保证长文舒适）、拍立得式标题区、暗色化引用 / 代码 / 链接。风格不得牺牲可读性。

## 7. 内容

「简单的内容就是最好的自我介绍。」自我陈述压到极简——masthead + 一行 tagline，随即进入作品。文章 = 杂志「特写」。少量「碎片 / 引言」提供编辑质感，但保持克制、具体、不空泛。刊名 / 刊题集中在 `data/site-content.ts`，一处可改。

## 8. Do / Don't

Do：纯黑画布 + 做旧纸卡的反差；金色稀有；等宽承载元信息；卡片轻微旋转带手作感；动效像呼吸；阅读页可读性优先。

Don't：金色到处铺；引言用 `ch` 做 measure；散落布局在移动端横向溢出；让视差 / 动效打断阅读；忽略 `prefers-reduced-motion`；把它做成又一个浅色作品集模板。
