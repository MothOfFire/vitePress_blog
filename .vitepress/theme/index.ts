// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import { createPinia } from "pinia";

import ArticleCard from "./components/article/ArticleCard.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // 创建 pinia
    const pinia = createPinia();
    app.use(pinia);

    // 注册全局组件
    app.component("ArticleCard", ArticleCard);
  },
} satisfies Theme;
