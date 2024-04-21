import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 地址栏标签页配置
  head: [["link", { rel: "icon", href: "/public/logo.svg" }]],
  title: "个人博客",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo
    logo: "/logo.svg",
    // 标题
    siteTitle: "个人文档库",
    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      {
        text: "CSS&HTML",
        items: [
          { text: "HTML", link: "/pages/html/html.md" },
          { text: "CSS", link: "/pages/css/css.md" },
        ],
      },
      {
        text: "Vue",
        items: [
          { text: "Vue2", link: "/pages/vue/vue2.md" },
          { text: "Vue3", link: "/pages/vue/vue3.md" },
        ],
      },
      { text: "React", link: "/pages/react/react.md" },
      {
        text: "JavaScript",
        items: [
          { text: "JavaScript", link: "/pages/javascript/javascript.md" },
          { text: "TypeScript", link: "/pages/typescript/typescript.md" },
          { text: "nodeJS", link: "/pages/javascript/node.md" },
          { text: "nestJS", link: "/pages/javascript/nest.md" },
        ],
      },
      {
        text: "DataBase",
        items: [
          { text: "MongoDB", link: "/pages/database/mongo.md" },
          { text: "MySQL", link: "/pages/database/mysql.md" },
        ],
      },
      { text: "关于", link: "/pages/about/about.md" },
      { text: "友链", link: "/pages/friend/friend.md" },
      { text: "相册", link: "/pages/photo/photo.md" },
    ],

    // 侧边栏
    sidebar: {
      "/pages/css/": [
        { text: "HTML", link: "/pages/html/html.md" },
        { text: "CSS", link: "/pages/css/css.md" },
      ],
      "/pages/html/": [
        { text: "HTML", link: "/pages/html/html.md" },
        { text: "CSS", link: "/pages/css/css.md" },
      ],
      "/pages/vue/": [
        { text: "Vue2", link: "/pages/vue/vue2.md" },
        { text: "Vue3", link: "/pages/vue/vue3.md" },
      ],
      "/pages/javascript/": [
        { text: "JavaScript", link: "/pages/javascript/javascript.md" },
        { text: "TypeScript", link: "/pages/typescript/typescript.md" },
        { text: "nodeJS", link: "/pages/javascript/node.md" },
        { text: "nestJS", link: "/pages/javascript/nest.md" },
      ],
      "/pages/typescript/": [
        { text: "JavaScript", link: "/pages/javascript/javascript.md" },
        { text: "TypeScript", link: "/pages/typescript/typescript.md" },
        { text: "nodeJS", link: "/pages/javascript/node.md" },
        { text: "nestJS", link: "/pages/javascript/nest.md" },
      ],
      "/pages/database/": [
        { text: "MongoDB", link: "/pages/database/mongo.md" },
        { text: "MySQL", link: "/pages/database/mysql.md" },
      ],
      "/pages/question/": [
        { text: "Vue 题库", link: "/pages/question/vue_question.md" },
        { text: "JavaScript 题库", link: "/pages/question/js_question.md" },
      ],
    },

    // github链接
    socialLinks: [{ icon: "github", link: "https://github.com/MothOfFire" }],

    // 页脚
    footer: {
      copyright: "Copyright © 2023-present MothOfFire",
    },
  },
  vite: {},
  vue: {},
});
