export type SiteContent = {
  metaDescription: string;
  hero: {
    statement: string;
    intro: string;
  };
};

export const siteContent: SiteContent = {
  metaDescription:
    "yeziii 的个人首页：一个被兴趣驱动的人，以及思考留下的痕迹。",
  hero: {
    statement: "在这里仅展示我自己，作为我存在和被观测的方式之一",
    intro:
      "一个被兴趣驱动的人。对世界保持好奇，对自己保持怀疑。读到触动我的东西，会想把它想清楚。这里是我思考留下的痕迹。",
  },
};
