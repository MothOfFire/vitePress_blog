import { defineStore } from "pinia";
import { reactive } from "vue";

export const useArticleStore = defineStore("article", () => {
  const articleCardList = reactive([
    {
      imgSrc: "https://picsum.photos/200/300",
      tag: "articleTag",
      title: "文章标题",
      desc: "文章描述",
      publishTime: "2023-01-01",
      author: "vv",
    },
  ]);

  return { articleCardList };
});
