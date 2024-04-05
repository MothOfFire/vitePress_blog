import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 标题

    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/" },
      { text: "说说", link: "/" },
      { text: "留言", link: "/" },
      { text: "关于", link: "/" },
      { text: "友链", link: "/" },
      { text: "相册", link: "/" },
    ],

    // 侧边栏
    sidebar: [],

    // github链接
    socialLinks: [{ icon: "github", link: "https://github.com/MothOfFire" }],

    // 页脚
    footer: {
      copyright: "Copyright © 2023-present MothOfFire",
    },
  },
});
