# Vue CLI

[CLI官方文档](https://cli.vuejs.org/zh/)

[toc]

## CLI 介绍

Vue官方提供的工具 用来辅助项目的构建。基于Vue.js进行快速开发的完整系统，称为脚手架工具。

特点：

- 定制统一规范的架构风格
- 初始化配置项目依赖
- 提供单文件组件结构

操作方式：命令行工具

## 安装

全局安装

`npm install -g @vue/cli`

更新包

`npm update -g @vue/cli`

查看是否安装

`vue --version`

## 项目搭建

- 创建项目 `vue create project-demo`
- 选择预设功能 Perset
- 选择包管理器
- 创建完成

## 目录文件

```text
└─ 根目录
    ├─ public 预览文件目录
    └─ src
        ├─ assets 静态资源目录
        └─ components 项目组件目录
        └─ App.vue 根组件
        └─ main.js 入口文件
```

### 单文件组件

单文件组件可以将组件的功能统一保存在以 .vue 为扩展名的文件中

## 打包

将 Vue CLI 项目编译为浏览器可识别的文件

会生成一个 dist 文件夹

`npm run build`

## 部署

将 Vue 项目 dist 目录部署到服务器上

- 安装静态文件服务器 `npm install -g serve`
- 在 dist 下通过 `serve` 命令部署 或者 `serve dist`
