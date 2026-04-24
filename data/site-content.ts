type TextLine = {
  emphasis?: string;
  text: string;
};

export type SiteContent = {
  metaDescription: string;
  nav: Array<{ label: string; href: string }>;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    meta: Array<{ label: string; text: string }>;
  };
  artifact: {
    focusLabel: string;
    focusTitle: string;
    focusText: string;
    noteLabel: string;
    noteLines: TextLine[];
    todayLabel: string;
    today: Array<{ text: string; isOpen?: boolean }>;
  };
  work: {
    eyebrow: string;
    title: string;
    copy: string;
    preview: string;
    caseLabel: string;
    caseTitle: string;
    caseText: string;
    tags: string[];
  };
  writing: {
    label: string;
    posts: Array<{ date: string; title: string; text: string }>;
  };
  notes: {
    eyebrow: string;
    title: string;
    copy: string;
    cards: Array<{ label: string; title: string; text: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    copy: string;
    cta: string;
  };
  footerMeta: string;
};

export const siteContent: SiteContent = {
  metaDescription: "yeziii 的个人首页：安静的系统、编辑感界面、写作与小实验。",
  nav: [
    { label: "作品", href: "#work" },
    { label: "写作", href: "#writing" },
    { label: "笔记", href: "#notes" },
    { label: "关于", href: "#contact" },
  ],
  hero: {
    eyebrow: "早安 / 个人网站",
    title: "做有呼吸感的产品，也记录它成形的过程。",
    lede: "设计、代码和安静的系统。一个位于界面、古典文学与缓慢思考之间的小小主页。",
    primaryCta: "查看精选作品",
    secondaryCta: "阅读笔记",
    meta: [
      {
        label: "关注",
        text: "为智能工具、发布系统和个人知识空间设计更安静的界面。",
      },
      {
        label: "材料",
        text: "文字、字体、代码、动效，以及让软件更可读的小决定。",
      },
      {
        label: "节奏",
        text: "小步发布，快速学习，让界面诚实，并为思考留下空间。",
      },
    ],
  },
  artifact: {
    focusLabel: "当前关注",
    focusTitle: "让更长的思考拥有更安静的互联网。",
    focusText: "构建一个面向慢阅读与深思考的发布工具，让结构帮助注意力停留下来。",
    noteLabel: "工作笔记",
    noteLines: [
      { emphasis: "系统", text: " 优先于功能。" },
      { emphasis: "清晰", text: " 优先于机巧。" },
      { text: "小步发布，学习，再打磨。" },
    ],
    todayLabel: "今天",
    today: [
      { text: "打磨编辑器流程" },
      { text: "整理设计原则" },
      { text: "试作主题配置", isOpen: true },
    ],
  },
  work: {
    eyebrow: "精选作品",
    title: "几件有清晰脉搏的小作品。",
    copy: "不是巨大的项目网格，只保留这个网站真正想承载的东西：专注阅读、体贴工具，以及保持温度的系统。",
    preview: "一次更专注的阅读体验。",
    caseLabel: "案例 / 阅读器",
    caseTitle: "为开放网络设计一次更专注的阅读体验。",
    caseText: "围绕节奏、排版和轻量操作进行的界面研究，帮助人们更长久地停留在文本里。",
    tags: ["编辑感 UI", "前端", "阅读系统"],
  },
  writing: {
    label: "写作",
    posts: [
      {
        date: "05.06",
        title: "为注意力而设计",
        text: "关于专注、节奏和克制的笔记。",
      },
      {
        date: "04.28",
        title: "复杂度的代价",
        text: "为什么更简单的系统更容易复利。",
      },
      {
        date: "04.10",
        title: "小步发布，快速学习",
        text: "把原型当作思考工具的一则工作笔记。",
      },
    ],
  },
  notes: {
    eyebrow: "开放线索",
    title: "一些仍值得保持打开的问题。",
    copy: "受 Claude 启发，但不复制聊天气泡：这些小型 artifact 卡片保存当前问题、实验和阅读痕迹。",
    cards: [
      {
        label: "01 / 界面语言",
        title: "AI 产品怎样才能少一点噪音？",
        text: "探索层级、渐进披露，以及既能引导又不喋喋不休的文案。",
      },
      {
        label: "02 / 材质研究",
        title: "数字纸张到底意味着什么？",
        text: "纸色、颗粒、阴影和间距，作为注意力的信号，而不是装饰。",
      },
      {
        label: "03 / 古典网络",
        title: "首页能不能更像一本笔记？",
        text: "为代码、文学、节气笔记和不该被催促的小片段保留一个慢档案。",
      },
    ],
  },
  contact: {
    eyebrow: "关于 / 联系",
    title: "给作品留一扇更安静的门。",
    copy: "这个首页像一张仍在使用的书桌：放精选作品、文章、原型，以及那些适合慢慢读的对话。",
    cta: "开始对话",
  },
  footerMeta: "谷雨 · grain rain · last touched 2026-04-24",
};
