<script setup lang="ts" name="ArticleCard">
defineProps(["articleCard"]);
</script>

<template>
  <div class="card">
    <!-- 封面图片区 -->
    <img class="card_image" :src="articleCard.cover" />
    <!-- 文章简介区 -->
    <div class="article">
      <!-- 文章的标题 -->
      <div class="header">
        <div class="tags">#{{ articleCard.tag }}</div>
        <div class="title">
          <h3>{{ articleCard.title }}</h3>
        </div>
      </div>
      <!-- 文章的摘要 -->
      <div class="content">
        <p>{{ articleCard.desc }}</p>
      </div>
      <!-- 文章的作者 -->
      <div class="author">
        <img class="author_img" src="/public/logo.svg" />
        <span class="name">{{ articleCard.author }}</span>
        <span class="time">{{ articleCard.publishTime }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 100%;
  opacity: 0.8;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 5px 5px #888888;
  display: flex;
  justify-content: flex-start;

  .card_image {
    width: 45%;
    border-radius: 10px 0 0 10px;
  }

  .article {
    border-radius: 0 10px 10px 0;
    width: 55%;
    padding-left: 25px;
    background-color: rgba($color: #100f0f, $alpha: 0.7);
    display: flex;
    flex-direction: column;
    .header {
      .tags {
        margin-top: 10px;
        font-size: 12px;
        color: #ccc;
      }
      .title h3 {
        color: #fff;
      }
    }

    .content {
      color: #fff;
      margin-top: 10px;
      font-size: 14px;
    }

    .author {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .author_img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 10px;
      }

      .name {
        color: #fff;
        margin-right: 10px;
      }

      .time {
        color: #ccc;
      }
    }
  }
}
</style>
