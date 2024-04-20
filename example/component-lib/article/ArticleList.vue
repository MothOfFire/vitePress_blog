<script setup lang="ts">
import { reactive } from "vue";

const articleCardList = reactive([
  {
    // 封面图片
    cover: "/public/cover/cover_01.jpg",
    // 文章标题
    title: "vitePress 项目",
    // 文章标签
    tag: "vitePress",
    // 文章描述
    desc: "22222",
    // 文章发布时间
    publishTime: "2020/2/2",
    // 文章作者
    author: "vv",
  },
  {
    // 封面图片
    cover: "/public/cover/cover_01.jpg",
    // 文章标题
    title: "vitePress 项目",
    // 文章标签
    tag: "vitePress",
    // 文章描述
    desc: "22222",
    // 文章发布时间
    publishTime: "2020/2/2",
    // 文章作者
    author: "vv",
  },
  {
    // 封面图片
    cover: "/public/cover/cover_01.jpg",
    // 文章标题
    title: "vitePress 项目",
    // 文章标签
    tag: "vitePress",
    // 文章描述
    desc: "22222",
    // 文章发布时间
    publishTime: "2020/2/2",
    // 文章作者
    author: "vv",
  },
  {
    // 封面图片
    cover: "/public/cover/cover_01.jpg",
    // 文章标题
    title: "vitePress 项目",
    // 文章标签
    tag: "vitePress",
    // 文章描述
    desc: "22222",
    // 文章发布时间
    publishTime: "2020/2/2",
    // 文章作者
    author: "vv",
  },
]);
</script>

<template>
  <div class="list" scope>
    <div class="title">
      <h2>文章列表</h2>
    </div>
    <div class="main">
      <ArticleCard
        class="item"
        v-for="(item, index) in articleCardList"
        :key="index"
        :articleCard="item"
      />
    </div>
  </div>
</template>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    height: 50px;
    h2 {
      font-size: 25px;
      line-height: 50px;
      color: #ccc;
    }
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;

    .item {
      width: 500px;
      height: 200px;
      margin: 25px;
    }
  }
}
</style>
