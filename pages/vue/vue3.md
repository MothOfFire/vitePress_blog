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
| :--------: | :--------: |
|    vue     |   vue-ts   |
|   react    |  react-ts  |
|  vanilla   | vanilla-ts |
|   preact   | preact-ts  |
|    lit     |   lit-ts   |
|   svelte   | svelte-ts  |
|   solid    |  solid-ts  |
|    qwik    |  qwik-ts   |

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

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)

```vue
<span>{{变量名}}</span>
```

双大括号标签会被替换为相应组件实例中 该变量属性的值。当该变量是响应式数据声明的变量时，每次变量更改时它也会同步更新。

### Attribute（属性） 绑定

### 内置指令

## setup 函数

setup 函数是 Vue3 中一个新的配置项，值为一个函数。setup 函数会在 beforeCreate 钩子之前被调用，所以它无法访问到 data、computed 或 methods 上的属性。并且 setup 函数中的 this 不是 Vue 实例，而是 undefined，Vue3 中已经弱化了 this。

1 setup 函数的返回值：

- 返回一个对象，对象中的属性、方法，在模板中都可以直接使用。
- 返回一个渲染函数，可以自定义渲染内容。

2 setup 与 option API 的关系

- setup 与 data、methods 等选项可以共存，
- option API 可以使用 setup 里的数据，但 setup 不能读取 optiob API 中的数据

3 setup 语法糖

- 在模板中使用 `<script setup>` 标签，可以不需要在模板中使用 `setup()` 函数。
- `<script setup>`中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用。你可以理解为模板是在同一作用域内声明的一个 JavaScript 函数——它自然可以访问与它一起声明的所有内容。

## 响应式数据

### 基本类型的响应式数据

使用 ref 函数声明基本类型的响应式数据

```js
import { ref } from "vue";

const count = ref(0);

// 修改
count.value++;
// 读取
console.log(count.value);
```

ref 函数接收一个参数作为初始值，返回一个响应式数据对象 RefImpl。该对象包含一个 value 属性，该属性与传入的参数值保持一致。

ref 函数会自动将基本类型的值转换为对应的响应式数据对象。如果要读取或修改声明好的基本类型数据，需要使用 .value 属性。

### 对象类型的响应式数据

可以使用 ref 函数和 reactive 函数来声明对象类型的响应式数据

#### 使用 reactive 函数声明对象类型的响应式数据

使用 reactive 函数声明对象类型的响应式数据

```js
import { reactive } from "vue";

const state = reactive({
  count: 0,
});

// 修改
state.count++;
// 读取
console.log(state.count);
```

reactive 函数接收一个参数作为初始值，返回一个响应式数据对象 Proxy。

reactive 函数会自动将对象类型的值转换为对应的响应式数据对象。如果要读取或修改声明好的对象类型的数据，直接使用该数据对象即可。

当重新分配一个新的对象给声明好的变量时，会失去响应式特性。但可以使用 `Object.assign` 将整个对象重新赋值给响应式数据对象。

```js
import { reactive } from "vue";

const state = reactive({
  count: 0,
});

// 重新分配对象
state = { name: "zs" }; // state 会失去响应式特性

Object.assign(state, { name: "zs" }); // 整体替换对象，不会失去响应式特性
```

#### 使用 ref 函数声明对象类型的响应式数据

使用 ref 函数声明对象类型的响应式数据

```js
import { ref } from "vue";

const state = ref({
  count: 0,
});

// 修改
state.value.count++;
// 读取
console.log(state.value.count);
```

ref 函数接收一个参数作为初始值，返回一个响应式数据对象 RefImpl。该对象包含一个 value 属性，该属性是一个 Proxy 对象。说明了 ref 函数在包装对象类型数据时会在底层使用 reactive 函数。

ref 函数会自动将对象类型的值转换为对应的响应式数据对象。如果要读取或修改声明好的对象类型的数据，需要使用 .value 属性。

### ref 函数与 reactive 函数的区别

- ref 函数用来声明基本类型数据或者对象类型的数据。
- reactive 函数只能用来声明对象类型的数据。
- ref 函数声明的变量必须使用 .value 属性来读取或修改其值。可以使用 volar 插件自动添加 .value。
- reactive 函数声明的变量重新分配新对象时会失去响应式特性，但可以使用 `Object.assign` 进行整体替换，ref 函数声明的变量重新分配新对象时不会失去响应式特性。

#### 使用原则

- 若需要一个基本类型的响应式数据，必须使用 ref 函数进行声明。
- 若需要一个对象类型的响应式数据，且层级不深，ref 函数与 reactive 函数都可以使用。
- 若需要一个对象类型的响应式数据，且层级较深，推荐使用 reactive 函数进行声明。
- 表单数据建议使用 reactive 函数进行声明。

### 响应式数据的判断

使用 isRef 函数判断一个值是否为响应式数据对象。

使用 isReactive 函数判断一个对象是否为响应式数据对象。

使用 isReadonly 函数判断一个对象是否为只读的响应式数据对象。

使用 isProxy 函数判断一个对象是否为代理对象。

### 进阶

### toRef 与 toRefs

toRefs 与 toRef 函数都可以将响应式对象的属性拿出来并让其保持响应式特性，toRefs 函数用于一次批量解构出需要的属性；而 toRef 函数用于解构出一个需要的属性，若要批量解构需要多次执行才可以。

#### toRefs

toRefs 函数接收一个由 reactive 函数声明的响应式对象，该方法会将响应式对象中的每一个键值对的值转换为 ObjectRefImpl 对象。

#### toRef

toRef 函数可以接收两个参数，第一个参数是由 reactive 函数声明的响应式对象，第二个参数是响应式对象中的属性名，该方法会将响应式对象中指定的属性名的值转换为 ObjectRefImpl 对象。

## 计算属性与侦听器

### 计算属性

### 侦听器

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
