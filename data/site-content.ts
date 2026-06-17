export type NavLink = { label: string; href: string };

export type PullQuote = {
  text: string;
  highlight?: string[];
  cite?: string;
};

export type Fragment = {
  kicker: string;
  title: string;
  note?: string;
  meta?: string;
};

export type DeckCard = {
  index: string;
  title: string;
  note?: string;
};

export type SiteContent = {
  metaDescription: string;
  masthead: {
    script: string;
    presents: string;
    title: string;
    titleSub: string;
  };
  chrome: {
    badge: string;
    issue: string;
    nav: NavLink[];
  };
  tagline: string;
  posters: string[];
  pullQuotes: PullQuote[];
  fragments: Fragment[];
  deck: {
    label: string;
    title: string;
    cards: DeckCard[];
  };
  footer: {
    eyebrow: string;
    title: string;
    sub: string;
    actions: NavLink[];
  };
};

export const siteContent: SiteContent = {
  metaDescription:
    "yeziii 的个人杂志：把思考留下的痕迹，排进一本暗房里的刊物。",
  masthead: {
    script: "yeziii",
    presents: "个人杂志 · A PERSONAL ISSUE",
    title: "痕迹",
    titleSub: "TRACES — by yeziii",
  },
  chrome: {
    badge: "YEZIII MAGAZINE",
    issue: "ISSUE Nº 01 · 2025",
    nav: [
      { label: "封面 / COVER", href: "#top" },
      { label: "写作 / WRITING", href: "#writing" },
    ],
  },
  tagline: "一个被兴趣驱动的人，把想清楚的东西留成痕迹。",
  posters: [
    "当思考变成设计",
    "形式是一种立场",
    "对话中的静默",
    "留白",
    "关于记忆与阅读",
    "遭遇",
    "停顿即信任",
    "夜海航行",
    "好奇",
    "怀疑",
    "把它想清楚",
    "痕迹",
  ],
  pullQuotes: [
    {
      text: "决定「不放什么」，比决定「放什么」更难。",
      highlight: ["不放什么"],
      cite: "当思考变成设计",
    },
    {
      text: "我们记住的不是内容本身，而是内容与某个时刻的相遇。",
      highlight: ["相遇"],
      cite: "关于记忆与阅读",
    },
    {
      text: "那些停顿不是尴尬，而是在消化。沉默本身成了一种沟通。",
      highlight: ["沉默"],
      cite: "对话中的静默",
    },
  ],
  fragments: [
    {
      kicker: "NOW",
      title: "在做这本杂志",
      note: "把博客重排成暗房里的刊物",
      meta: "2025",
    },
    {
      kicker: "OBSESSION",
      title: "形式即内容",
      note: "它塑造内容被感知的方式",
      meta: "进行中",
    },
  ],
  deck: {
    label: "速写 / SKETCHES",
    title: "翻一翻",
    cards: [
      { index: "01", title: "留白是一种立场", note: "选择不填满" },
      { index: "02", title: "写清楚＝想清楚", note: "绕，是还没想明白" },
      { index: "03", title: "安静本身就是礼物", note: "读一本书时的状态" },
      { index: "04", title: "信任始于停顿", note: "不急着填满沉默" },
    ],
  },
  footer: {
    eyebrow: "END OF ISSUE",
    title: "继续读下去",
    sub: "这本杂志会随我想清楚的东西，慢慢长出新页。",
    actions: [
      { label: "翻到全部写作 →", href: "#writing" },
      { label: "回到封面 ↑", href: "#top" },
    ],
  },
};
