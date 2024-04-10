---
layout: doc
title: Vue3
---

## Vue3 项目的创建与启动

### 使用 vite 创建

```bash
    # 使用 npm 安装
    npm create vite@latest

    # 安装预设 vue3 的模板
    npm create vite@latest pojectName --template vue

    # 使用 pnpm 安装
    # 全局安装 pnpm
    npm install pnpm -g
    # 创建vue3工程
    pnpm create vite

    # 安装预设 vue3 的模板
    pnpm create vite projectName --template vue
```

#### vite 预设模板

| JavaScript | TypeScript |
| ---------- | :--------: |
| vue        |   vue-ts   |
| react      |  react-ts  |
| vanilla    | vanilla-ts |
| preact     | preact-ts  |
| lit        |   lit-ts   |
| svelte     | svelte-ts  |
| solid      |  solid-ts  |
| qwik       |  qwik-ts   |

### 使用 vue-cli 创建

```bash
    # 使用 npm 安装
    npm install -g @vue/cli
    # 保证 vue cli 版本在 4.5.0 以上
    vue --version
    # 创建vue3工程
    vue create vue@latest

    # 安装预设 vue3 的模板
    vue create vue@latest --template vue
```

### 启动项目

```bash
    # npm 启动项目
    cd pojectName
    npm run dev
    # pnpm 启动
    pnpm run dev
    cd pojectName
    pnpm run dev
```

### Vue3 项目目录结构

## 创建一个 Vue 应用

每个 Vue 应用都是通过 createApp 函数创建一个新的应用实例

```js
import { createApp } from "vue";

const app = createApp({
  // 根组件选项
});
```

### 根组件

我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。而这个根组件的名称一般叫做 App.vue

### 挂载应用

应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串

```js
import { createApp } from "vue";
// 从一个单文件组件中导入根组件
import App from "./App.vue";

const app = createApp(App);
// 挂载应用：将vue应用渲染到id为app的元素上
app.mount("#app");
```

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。
.mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

## 生命周期钩子

### 创建阶段

`setup`

### 挂载阶段

挂载前：`onBeforeMount(() => {/*挂载前执行的逻辑*/})`

挂载后：`onMounted(() => {/*挂载后执行的逻辑*/})`

### 更新阶段

更新前：`onBeforeUpdate(() => {/*更新前执行的逻辑*/})`
更新后：`onUpdated(() => {/*更新后执行的逻辑*/})`

### 卸载阶段

卸载前：`onBeforeUnmount(() => {/*卸载前执行的逻辑*/})`
卸载完毕：`onUnmounted(() => {/*卸载完毕执行的逻辑*/})`

## 模板语法

### 文本插值

### Attribute（属性） 绑定

### 内置指令

## setup 函数

setup 函数是 Vue3 中一个新的配置项，值为一个函数。setup 函数会在 beforeCreate 钩子之前被调用，所以它无法访问到 data、computed 或 methods 上的属性。并且 setup 函数中的 this 不是 Vue 实例，而是 undefined，Vue3 中已经弱化了 this。

1. setup 函数的返回值：

- 返回一个对象，对象中的属性、方法，在模板中都可以直接使用。
- 返回一个渲染函数，可以自定义渲染内容。

2. setup 与 option API 的关系

- setup 与 data、methods 等选项可以共存，
- option API 可以使用 setup 里的数据，但 setup 不能读取 optiob API 中的数据

3. setup 语法糖

- 在模板中使用 `<script setup>` 标签，可以不需要在模板中使用 `setup()` 函数。
- `<script setup>`中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用。你可以理解为模板是在同一作用域内声明的一个 JavaScript 函数——它自然可以访问与它一起声明的所有内容。

## 响应式数据

### 基本类型的响应式数据

### 对象类型的响应式数据

### 进阶

## 计算属性与侦听器

## props

## hooks

## 路由 route

## 状态管理 pinia

## 组件

### 组件注册

### 组件通信

### 内置组件

### 异步组件

## 全局 API

## Vue3 的非兼容性改变
