---
layout: doc
title: 编写代码遇到的问题
---

## VSCode 编写 package.json 注释是爆红？

打开 VSCode 设置，搜索 `files:Associations`，添加 `.json` 文件的关联值 `jsonc`;

|      项      |  值   |
| :----------: | :---: |
| package.json | jsonc |
|  XXXX.json   | jsonc |

因为 `.json` 文件是不能直接添加注释的，而 `jsonc` 文件可以添加注释。如果遇到 `.json` 文件注释爆红，可以尝试关联值为 `jsonc`。
