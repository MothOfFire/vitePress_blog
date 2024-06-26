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

双大括号不能在 HTML 标签的 attributes 中使用。想要响应式地绑定一个 attribute，应该使用 v-bind 指令。

指令语法 `v-bind:attributes 名 = "value"`，可以简写为 `:attributes 名 = "value"`，如果 value 的变量名与 attributes 名相同，则可以省略 value 的变量名，即 `:attributes 名`。

如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除。

v-bind 指令是一个单向绑定的指令，只能将定义的数据变量绑定到 attribute 上，而不能将 attribute 绑定到数据变量上。所以修改 attribute 的操作都会导致数据变量发生改变，而修改数据变量的操作不会导致 attribute 发生改变。

#### v-bind 与 v-model 的区别

v-bind 指令是一个单向绑定的指令，只能将定义的数据变量绑定到 attribute 上，而不能将 attribute 绑定到数据变量上。

v-model 指令是一个双向绑定的指令，既可以将定义的数据变量绑定到 attribute 上，还能将 attribute 绑定到数据变量上。

v-bind 用于绑定 attribute，而 v-model 用于在 input、textarea、select 等表单控件元素上创建双向数据绑定。

### 内置指令

## 模板引用

虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作，但在某些情况下，我们仍然需要直接访问底层 DOM 元素。要实现这一点，我们可以使用特殊的 ref attribute（属性）

ref 是一个特殊的 attribute，它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。
当 ref 标记 HTML 标签时，创建的 ref 变量存储的是 DOM 元素；当 ref 标记组件时，创建的 ref 变量存储的是组件实例，但是组件实例无法看到组件内部定义的对象，这是 VUE 的保护机制，可以使用 `defineExpose` 方法将需要暴露的戴数据导出，该组件实例对象就可以引用相应的数据。

### 模板引用

在模板标签上使用 ref 标记后，需要声明一个匹配模板 ref attribute 值的 ref，且该变量的变量名必须与模板 ref attribute 上的值相同。

```vue
<script setup>
import { ref, onMounted } from "vue";

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null);

onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <input ref="input" />
</template>
```

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

计算属性是有缓存的，当初始化完成后，只有依赖的变量发生变化时，它才会再次执行重新计算。

```js
import { computed, ref } from "vue";

const count = ref(0);

// 这样定义的计算属性是只读的，不能进行修改
const doubleCount = computed(() => {
  console.log("计算属性被访问了");
  return count.value * 2;
});

// 读取
console.log(doubleCount.value);
```

#### 可写计算属性

使用 get 和 set 函数来定义一个可写计算属性。

```js
import { computed, ref } from "vue";

const count = ref(0);

// 这样定义的计算属性是只读的，不能进行修改
const doubleCount = computed({
  // getter
  get: () => {
    console.log("计算属性被访问了");
    return count.value * 2;
  },
  // setter
  set: (val) => {
    console.log("计算属性被修改了");
    count.value = val / 2;
});
```

计算属性的 getter 应只做计算而没有任何其他的副作用，不要改变其他状态、在 getter 中做异步请求或者更改 DOM；

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

### 侦听器

计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”：例如更改 DOM，或是根据异步操作的结果去修改另一处的状态。

在组合式 API 中，我们可以使用 `watch` 函数在每次响应式状态发生变化时触发回调函数；其作用是侦听数据的变化

`watch` 函数接收 3 个参数，第一个参数是侦听数据源，第二个参数是回调函数，第三个参数是配置选项。

```js
import { watch } from "vue";

const count = ref(0);

watch(
  // 侦听数据源
  count,
  // 回调函数
  (newVal, oldVal) => {
    console.log("count 发生变化了");
    console.log(newVal, oldVal);
  },
  // 配置选项
  { deep: true }
);
```

#### 侦听数据源

`watch` 函数只能侦听四种数据：

- ref 函数声明的数据
- reactive 函数声明的数据
- 一个 getter 函数即函数返回一个值`() => 返回值`
- 一个包含上述内容的数组

侦听上述数据源的情况：

1. 侦听 ref 函数声明的基本类型数据：直接写数据源变量名即可，侦听其 value 属性值的变化
2. 侦听 ref 函数声明的对象类型数据：直接数据源变量名，侦听的是对象的地址值，若想侦听对象内部的属性，要手动开启深度侦听
3. 侦听 reactive 函数声明的对象类型数据：直接数据源变量名，侦听的是对象内部的属性，默认开启深度侦听，且无法关闭
4. 侦听 ref 函数或者 reactive 函数声明的对象类型数据中的某个属性：需要注意的是，若该属性不是对象类型，需要写成函数的形式，即 `() => 属性名`；若该属性是对象类型，则可以直接写属性名，也可写成函数的形式，推荐写成函数的形式
5. 侦听上述情况的多个数据：使用 `[]` 将需要侦听的数据源包裹起来

#### watchEffect

`watchEffect` 函数是一个立即执行函数，同时响应式地追踪其依赖的数据源，并在依赖的数据源发生变化时重新执行该函数。

```js
import { watchEffect } from "vue";

watchEffect(() => {
  // 回调函数：侦听数据源变化的方法
  console.log(count.value);
});
```

`wacth` 与 `wacthEffect` 的联系

相同点：

- 两者都可以侦听数据源的变化
- 两者都可以在数据源发生变化时触发回调函数
- 两者都可以在配置选项中开启深度侦听
- 两者都可以在配置选项中关闭深度侦听

不同点：

- `watch` 函数需要手动指定侦听的数据源，而 `watchEffect` 函数不需要手动指定侦听的数据源，其会自动追踪其依赖的数据源
- `watchEffect` 函数在渲染时会自动先执行一次，而 `watch` 函数不会,若想自动执行必须添加配置项`immediate`
- `watch` 函数的回调函数可以接收两个参数，第一个参数是新的值，第二个参数是旧的值；而 `watchEffect` 函数的回调函数只能接收一个参数，即变化后的值

#### 配置选项

- `immediate` 属性，默认值为 false，若设置为 true，则侦听器会在侦听开始之后立即调用一次回调函数。
- `deep` 属性，默认值为 false，若设置为 true，则侦听器会深度侦听数据变化。
- `once` 属性，默认值是 false，若设置为 true，则侦听器在第一次触发之后会自动移除自身。

## props

父组件在子组件标签上添加一个 `:propsName="value"` 的属性，子组件在 props 选项中声明一个与父组件传入的属性名相同的属性，即可将父组件传入的属性值赋值给子组件的 props 选项中声明的属性。

### 单向数据流

父组件向子组件传递数据时，子组件不能修改父组件传递的数据，只能通过触发事件的方式通知父组件修改数据。

### 接收 props

#### 子组件直接接收

```js
import { defineProps } from "vue";

let props = defineProps(["propsName"]);
```

#### 接收并限制类型

```js
import { defineProps } from 'vue';
import { type propsType } from '@/types';

let props = defineProps<{propsName: propsType}>()
```

#### 接收并限制类型与默认值

```js
import { defineProps, withDefaults } from 'vue';
import { type propsType } from '@/types';

withDefaults(defineProps<{propsName: propsType}>(), {
  propsName: 'defaultValue'
});
```

## 自定义 hooks

hooks 的命名规范：useHookName.js/useHookName.ts

```js
export default function useHookName() {
  // 功能数据声明
  const 数据声明的变量名 = ref(初始值);
  // 功能逻辑函数声明
  const 功能逻辑函数名 = () => {
    // 功能逻辑
  };
  // 返回数据和逻辑函数,向外部提供数据
  return {
    数据声明的变量名,
    功能逻辑函数名,
  };
}
```

::: tip
默认暴露可以不用写函数名，导出的方法就是文件名
:::

### 引入自定义 hooks

```js
import useHooksName from "@/hooks/useHooksName";

let { 数据变量名, 功能逻辑函数名 } = useHooksName();
```

## 路由 route

### 安装 vue-router

```bash
npm install vue-router@4

# or
pnpm install vue-router@4

```

### 创建路由实例

在项目的 src 目录下，创建一个 router 文件夹，并在该文件夹下创建一个 index.js/index.ts 文件。在该文件中，创建一个路由实例，并配置路由规则。

```js
import { createRouter, createWebHistory } from 'vue-router';

// 创建路由器
const router = createRouter({
  // 路由工作模式
  history: createWebHistory(),
  // 路由规则
  routes: [
    {
      name: '路由名'，
      path: '/路由路径',
      component: '路由组件名',
      // 子路由，当有子路由的时候添加这个配置项
      children: [
        {
          name: '子路由名'，
          path: '子路由路径，不用加 /',
          component: '子路由组件名',
        }
      ]
    }
  ]
});

// 暴露路由器
export default router;

```

### 路由导航

存放路由组件的文件一般与项目组件分开，项目组件存放于 src/components 文件夹下，而路由组件存放在 src/views 或 src/pages 文件夹下。

```vue
<template>
  <RouterLink
    :to="{ path: '路由路径', name: '路由名' }"
    artive-class="被激活的类名"
    >路由导航名称</RouterLink
  >
  <RouterViews></RouterViews>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
```

### 路由工作模式

history 模式

优点：URL 更加美观，不带有#，更接近传统的网站 URL

缺点：后期项目上线需要服务端配合处理路径问题，否则刷新会有 404 错误

```js
import { createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
}

```

hash 模式

优点：兼容性更好，不需要服务端配合处理路径问题

缺点：URL 带有#，不美观，且在 SEO 优化方面相对较差

```js
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
}
```

### 路由参数

#### query 参数

第一种写法：字符串写法

```js
// 传参
:to = "`/routePath?queryName=${value}&queryName2=${value}`"

// 接收参数
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let { query } = toRefs(route)
```

第二种写法：对象写法

```js
// 传参
:to = "{
  path: '/路由路径名',
  query: {
    queryName: value,
    queryName2: value,
    ...
  }
}"

// 接收参数
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let { query } = toRefs(route)
```

#### params 参数

第一种写法：字符串写法

```js
// 传参
:to = "`/routePath/${ParamsValue1}/${ParamsValue2}`"
// 并且在路由规则配置中的 path 配置项添加占位符
path: '/routePath/:ParamsName1/:ParamsName2'
// 若在变量名后加上 ? 表示可传可不传

// 接收参数
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let { params } = toRefs(route)
```

第二种写法：对象写法

```js
// 传参
:to = "{
  name: '路由路径名',
  params: {
    paramName: value,
    paramName2: value,
    ...
    // value 不能是数组
  }
}"

// 接收参数
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let { params } = toRefs(route)
```

### 路由规则的 props 配置

配置项写法

```js
import { createRouter, createWebHistory } from 'vue-router';

// 创建路由器
const router = createRouter({
  // 路由工作模式
  history: createWebHistory(),
  // 路由规则
  routes: [
    {
      name: '路由名'，
      // 加上 ? 表示可传可不传
      path: '/路由路径/:占位变量名/:占位变量名2?',
      component: '路由组件名',
      props: true
    }
  ]
});

// 暴露路由器
export default router;

//接收 props 参数

defineProps([
  '占位变量名', '占位变量名2'
])
```

::: tip
将路由收到的所有 prams 参数作为 props 传递给路由组件
:::

函数写法

```js
props(router) {
  return{
    route.query
    //or
    router.params
  }
}
```

:::tip
函数写法可以自己决定将什么作为 props 传递给路由组件
:::

对象写法

```js
props: {
  变量名: "值";
}
```

## 状态管理 pinia

### 安装

```bash
npm install pinia

# or
pnpm install pinia

```

### 引入

在 main.js/main.ts 中引入

```js
import { createApp } from "vue";
import { createPinia } from "pinia";

// 创建 app 应用
const app = createApp(App);

// 创建 pinia 实例
const pinia = createPinia();

// 将 pinia 实例挂载到 app 上
app.use(pinia);

// 挂载到 vue 实例上
app.mount("#app");
```

### 存储数据

创建一个 src/store 文件夹，创建一个 modules 文件夹在该文件夹中分别存放每个功能的持久化数据

```js
import { defineStore } from "pinia";

export const useXxStore = defineStore("文件名", {
  state() {
    // 真正存储数据的地方
    return {
      数据名: 数据值,
    };
  },
  actions: {
    // 修改数据的方法
  },
});
```

### 读取数据

```js
import { useXxStore } from "./store/modules/xxStore";
import { storeToRefs } from "pinia";

const xxStore = useXxStore();

// 直接读取
xxStore.数据名;
xxStore.$state.数据名;

// 解构读取
const { 数据名 } = storeToRefs(xxStore);
```

### 修改数据

直接修改

```js
xxStore.数据名 = 修改后的数据值;
```

批量修改，适用于很多数据一起修改的情况

```js
xxStore.$patch({
  数据名: 修改后的数据值,
  数据名2: 修改后的数据值2,
  ...
});
```

action 修改，适用于异步操作，该操作多个组件都会用到该修改方法的时候使用

在 src/store/modules/xxStore.js 中

```js
import { defineStore } from "pinia";

export const useXxStore = defineStore("文件名", {
  state() {
    // 真正存储数据的地方
    return {
      数据名: 数据值,
    };
  },
  actions: {
    // 放置的是一个一个的修改数据的方法，用于响应式组件中的动作
    functionName(value) {
      // 修改方法的逻辑
      this.数据名 = value;
    },
  },
});
```

### getters

getters 相当于 Vue 的计算属性

```js
import { defineStore } from "pinia";

export const useXxStore = defineStore("文件名", {
  state() {
    // 真正存储数据的地方
    return {
      数据名: 数据值,
    };
  },
  actions: {
    // 放置的是一个一个的修改数据的方法，用于响应式组件中的动作
    functionName(value) {
      // 修改方法的逻辑
      this.数据名 = value;
    },
  },
  getters: {
    getterName(state) {
      // 返回一个值，这个值会根据 state 中的数据实时计算
      return state.数据名 * 10;
    },
    // 可以简写成 `getterName: state => state.数据名 * 10`
    getterName(): 数据类型 {
      //不借用 state 形参的写法，: 数据类型 ts 的时候需要写
      // 返回一个值，这个值会根据 state 中的数据实时计算
      return this.数据名 * 10;
    },
  },
});
```

### $subscribe 订阅

$subscribe 相当于 Vue 中的 watch，侦听数据的修改

```js
xxStore.$subscribe((mutation, state) => {
  // mutation：本次修改的信息
  // state：修改后 store 中的所有数据
  // 侦听方法的逻辑
});
```

### store 的组合式写法

```js
import { reactive } from "vue";
import { defineStore } from "pinia";

export const useXxStore = defineStore('文件名', () => {
  // 选项式的 state, 数据用 reactive 定义
  const 数据名 = reactive(
    JSON.parse(localStorage.getItem('数据名') as string) || []
  );
  // 选项式的 actions,
  function functionName(value) {
    // 修改方法的逻辑
  }
  // 导出数据和方法
  return {
    数据名, functionName
  }
})

```

## 组件

### 组件注册

### 组件通信

### 内置组件

### 异步组件

## 全局 API

## Vue3 的非兼容性改变
