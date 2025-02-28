import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Chanke's Blog",
  subTitle: "Chanke's Blog",
  brandTitle: "Chanke",

  description: "Chanke's Blog Website",

  site: "https://yichan521.github.io",

  locale: "zh-CN", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/Yichan521/Chanke_Blog",
    },
  ],

  username: "Chanke",
  sign: "愛音ちゃん、幸せ？",
  avatarUrl: "https://s3.bmp.ovh/imgs/2025/02/27/f310adb0887cac7e.png",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/Yichan521",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/1962278701",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home?id=1307219338",
    },
  ],
  maxSidebarCategoryChip: 3, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://i.postimg.cc/N0Dh8VpQ/2.jpg",
    "https://i.postimg.cc/Sx7jcJzP/3.jpg",
    "https://i.postimg.cc/qRY7pK9N/1.jpg",
    "https://i.postimg.cc/zGjTSJLx/1.png",
    "https://i.postimg.cc/qRY7pK9N/1.jpg",
    "https://i.postimg.cc/zGjTSJLx/1.png",
    "https://i.postimg.cc/gwxBmgC7/2.jpg",
    "https://i.postimg.cc/5tbdC15P/3.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
