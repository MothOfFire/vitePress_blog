---
layout: doc
title: "NuxtJS"
---

## 模板渲染

动态网站的本质是不同的数据通过模板生成不同的 HTML 页面的网站，其中不同数据通过模板生成 HTML 页面的过程就是模板渲染。

模板渲染一般分为服务器渲染、客户端渲染和同构渲染。

### 服务器渲染 MVC

客户端向服务器发起请求，服务器解析请求的 URL 向数据库获取数据，然后在服务器端将数据与 html 模板进行拼接，最后将拼接后的 HTML 返回给客户端。

**特点**：

- 所有渲染都在服务器端，服务器压力大
- 局部改变时，服务器端需要返回整个页面，占带宽
- 客户端直接拿到完整的 HTML 页面，显示快

### 客户端渲染 MVVM

客户端向服务器发起浏览器请求 1，服务器返回一个空的 HTML，客户端根据空 HTML 向服务器端发起浏览器请求 2，服务器端返回主 js 文件，客户端根据 js 文件向服务器端发起 ajax 请求，服务器解析请求向数据库获取数据，并响应返回给客户端，客户端接收数据并与 html 模板进行拼接

**特点**：

- 服务器压力变小，只响应必要的数据
- 客户端有更大的灵活性，只请求必要的数据
- 首屏显示时，客户端拿到空白页，需要 ajax 请求，再创建完整的 HTML 页面，用户体验上会感觉慢一些
- 搜索引擎第一次请求网页，分析网页的内容、记录，供别人搜索使用，而客户端渲染时，搜索引擎无法获取到网页内容，不利于 SEO

客户端渲染相应的框架：Vue、React、Angular

### 同构渲染 SSR--Server Side Rendering

客户端第一次请求（或者刷新）时，服务器端根据请求向数据库获取数据，并将数据与 html 模板进行拼接渲染，返回给客户端完整的 HTML 页面，客户端拿到完整的 HTML 后进行接管，往后的请求都是 ajax 请求，服务器端只返回数据，客户端根据数据与 html 模板进行拼接，渲染出完整的 HTML 页面。

**特点**：

- 解决了首屏渲染慢的问题
- 解决了 SEO 优化问题
- 兼备了客户端渲染灵活，请求数据少的优点
- 增加了部署的复杂性

同构渲染相应的框架：Next.js、Nuxt.js

使用场景：

- 首屏渲染慢，对 SEO 要求高，对首屏渲染速度有要求
- 除了后台管理系统这种不对外展示的系统，其他系统都推荐使用同构渲染

## 安装 NuxtJS

```bash
# npx
npx nuxi@latest init <project-name>

# pnpm
pnpm dlx nuxi@latest init <project-name>

```

### 启动

```bash
# npm
npm run dev -- -o

# pnpm
pnpm dev -o

```

## 目录结构

```bash
pojectName/ # 项目根目录
|
|-- .nuxt/ # Nuxt在开发中使用.nuxt/目录来生成你的Vue应用程序
|
|-- .output/ # 当运行 nuxt build时，Nuxt 会创建 .output/ 目录；使用这个目录来部署你的 Nuxt 应用程序到生产环境。
|
|-- assets/ # assets目录用于添加所有将由构建工具处理的网站资源
|   |
|   |-- css/ # 存放css、sass等样式文件
|   |-- fonts/ # 存放字体文件
|   |-- img/ # 存放不会从"public/"目录中提供的图片
|   |-- js/ # 存放js文件
|
|-- components/ # components/ 目录是你放置所有 Vue 组件的地方。
|
|-- composables/ # 使用composables/目录将你的Vue组合式函数自动导入到你的应用程序中。
|
|-- content/ # 使用 content/ 目录为你的应用创建一个基于文件的内容管理系统（CMS）
|
|-- layouts/ # layout/ 目录用于放置布局组件
|
|-- middleware/ # middleware/ 目录用于放置中间件
|
|-- modules/ # modules/ 目录用于放置模块,使用 modules/目录在应用程序中自动注册本地模块。
|
|-- node_modules/ # 依赖包
|
|-- pages/ # pages/ 目录用于放置路由组件
|
|-- plugins/ # plugins/ 目录用于放置插件
|
|-- public/ # public/ 目录用于提供网站的静态资源。包含一些公共文件，这些文件需要保持原来的文件名
|   |
|   |-- favicon.ico
|   |-- og-image.png
|   |-- robots.txt
|-- server/ # server/目录用于在应用程序中注册API和服务器处理程序。
|   |
|   |-- api/ # 用于放置有'api/'前缀的路由文件
|   |-- middleware/ # 用于放置服务器中间件
|   |-- routes/ # 用于放置没有'api/'前缀的路由文件
|   |
|-- utils/ # utils/ 目录用于放置工具函数
|
|-- .env # 一个 .env 文件用于指定构建和开发环境变量。
|
|-- .gitignore # 一个 .gitignore 文件用于指定 Git 应该忽略的文件和目录。
|
|-- .nuxtignore # 一个 .nuxtignore 文件用于指定 Nuxt 构建阶段忽略的文件和目录。
|
|-- app.vue # 应用程序的根组件，入口组件
|
|-- nuxt.config.ts # 用于配置应用程序的构建和开发配置。
|
|-- app.config.ts # 用于配置应用程序的运行时配置。
|
|-- package.json # 包含了应用程序的所有依赖项和脚本。
|
|-- pnpm-lock.yaml #pnpm 版本锁定文件
|
|-- tsconfig.json # Nuxt会根据你在Nuxt项目中使用的别名，以及其他合理的默认值，自动生成一个`.nuxt/tsconfig.json`文件，该文件继承生成的文件
```

## 基本路由

先创建一个 pages 文件夹，该文件夹用于存放路由组件。并在 `App.vue` 中添加路由出口。

```vue
<template>
  <div>
    <!-- 路由出口 -->
    <nuxt-page />
  </div>
</template>
```

### 默认路由组件

在 pages 目录下直接创建一个 `index.vue` 组件，该组件的路由就是 '/'。

### 不带前缀的路由组件

在 pages 目录下直接创建的组件，其路由就是'/文件名'。

### 带前缀的路由组件

在 pages 目录下创建一个功能名的文件夹，再在该文件夹下创建 `index.vue` 组件，该组件的路由就是'/功能名'。在文件夹下创建的其他组件，其路由就是'/功能名/组件名'。

### 父子路由组件

在 pages 目录下创建一个父路由组件并写好路由出口，再创建一个与父路由组件同名的文件夹，该文件夹下创建的路由组件都是父路由组件的子路由组件，其路由就是'/父路由组件名/子路由组件名'。

## 路由导航

使用 Nuxt 自带的 `NuxtLink` 组件实现路由导航。

```vue
<template>
  <div>
    <!-- 路由导航 -->
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/user">用户默认页</NuxtLink>
      <NuxtLink to="/user/create">添加用户页</NuxtLink>
    </nav>
    <!-- 路由出口 -->
    <nuxt-page />
  </div>
</template>
```

nuxt 会将 NuxtLink 组件解析为一个 a 标签，并添加一个 `href` 属性。但与原始的 a 标签不同，原始 a 标签跳转时会刷新页面，而 NuxtLink 组件跳转时不会刷新页面。
