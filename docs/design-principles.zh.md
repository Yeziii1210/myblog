# 设计原则 · 暗色极简（个人写作站）

> 本站经历了两步演变：先从「温暖纸墨博客」改为「暗房个人杂志」，
> 后又按「极简到底」收敛为现在的形态——**一个暗色、克制的个人写作站**。
> 英文版见 `design-principles.md`。历史上的杂志版（入场页 / 拍立得卡片 /
> 散落布局 / 叠堆 / 视差）已移除，如需查阅见 git 历史。

## 1. 现在的形态

- **首页** = 纯粹的「写作 / WRITING」文章索引，垂直居中在纯黑画布上，别无其他。
- **文章页** = 暗色但阅读优先的长文页：左上角手写「yeziii」标 + 返回链接（`Chrome`），
  拍立得式标题区，浅墨正文。
- 「简单的内容就是最好的自我介绍」——没有自我陈述、没有花哨模块，列表与文章本身即是介绍。

## 2. 颜色（`styles/tokens.css`）

- 画布：纯黑 `--bg #060606`，叠加极淡胶片颗粒 + 暗角。
- 暗底文字：`--fg #f5f2ea`，弱化 `--fg-muted / --fg-faint / --fg-ghost`。
- 暖金点缀：`--gold #c8a25a`、`--cream #efe7d6`——只用于栏目标签、序号 hover、链接、引用。
- 金色稀有即有力；层级靠明度 / 字重 / 间距，而非堆颜色。

## 3. 字体（免费近似，`styles/fonts.css` + tokens）

| 角色 | 变量 | 字体 |
|---|---|---|
| 大数字序号 | `--font-display` | Anton |
| 列表标题（拉丁） | `--font-name` | Archivo 700 |
| 文章标题（中文） | `--font-cjk-display` | 得意黑 Smiley Sans（CDN，回退 Noto Serif SC 700） |
| 栏目 / 日期 / 标签 | `--font-mono` | Space Mono |
| 衬线斜体（摘要） | `--font-serif-italic` | Fraunces italic |
| 手写（标 / 注脚） | `--font-script` | Caveat |
| 正文 | `--font-cjk` | Noto Serif SC |

等宽承载一切元信息；正文用衬线保证长文可读。

## 4. 结构

- `components/WritingIndex.tsx` —— 首页文章索引（序号 + 标题 + 摘要 + 日期·标签 + 箭头）。
- `components/Chrome.tsx` —— 仅文章页用（`minimal`）：手写标 + 返回链接。
- `components/Reveal.tsx` —— 轻量滚动揭示（IntersectionObserver）。
- `app/writing/[slug]/page.tsx` + `styles/post.css` —— 暗色可读长文页，保留 remark 管线。
- 文章 frontmatter 可选 `kicker` / `note`，用于文章页标题区。

## 5. Do / Don't

Do：保持极简（首页只是列表）；金色稀有；等宽承载元信息；阅读页可读性优先；尊重 `prefers-reduced-motion`。

Don't：往首页加回封面 / 卡片 / 模块；用浅色主题；写空泛的自我陈述；让样式牺牲长文可读性。
