<script setup lang="ts" name="Header">
import { ref, defineProps, withDefaults } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import type { logoText, navList } from "../types/modules/header";

withDefaults(defineProps<{ logoText: logoText; navList: navList }>(), {
  logoText: () => ({
    main: "LODING",
    buttom: "BLOG",
  }),
  navList: () => [
    {
      name: "首页",
      path: "/",
    },
    {
      name: "文章",
      path: "/article",
    },
    {
      name: "留言",
      path: "/message",
    },
    {
      name: "关于",
      path: "/about",
    },
  ],
});

const checked = ref<Boolean>(false);
</script>

<template>
  <div class="header">
    <div class="left">
      <div class="logo">
        <span class="main">{{ logoText.main }}</span>
        <span class="bottom">{{ logoText.buttom }}</span>
      </div>
      <div class="nav">
        <ul class="nav" v-for="(item, index) in navList" :key="index">
          <li class="nav_item">
            <a class="nav_a" :href="item.path">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <SearchOutlined class="item" />
      <a-button class="item" type="text">登录</a-button>
      <a-switch class="item" v-model:checked="checked" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 25px;
    line-height: 50px;
    .logo {
      height: 50px;
      line-height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .main {
        display: block;
        font-size: 25px;
        line-height: 25px;
        color: #fff;
      }

      .bottom {
        display: block;
        font-size: 12px;
        line-height: 12px;
        margin-top: 5px;
        color: #ccc;
      }
    }
    .nav {
      line-height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 0;

      .nav_item {
        list-style: none;
        margin-right: 10px;

        .nav_a {
          display: block;
          text-decoration: none;
          line-height: 50px;
          color: #000;
        }
      }
      .nav_item :hover {
        line-height: 28px;
        border: #ccc 1px solid;
        border-radius: 10px;
        color: #fff;
        background-color: #585757;
      }
    }
  }
  .right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // background-color: blueviolet;
    margin-right: 25px;

    .item {
      margin-left: 10px;
    }
  }
}
</style>
