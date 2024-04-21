// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import { createPinia } from "pinia";

// 引入组件
import MyInput from "../../example/component-lib/MyInput.vue";

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
    // app.component("组件名", 引入的组件);
    app.component("MyInput", MyInput);
  },
} satisfies Theme;
