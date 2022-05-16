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

### 选项说明

- `Babel` js 代码转义工具
- `CSS Pre-processors` css预处理器选择

### 项目流程

[项目示例](https://github.com/leleqin/information-manage-fed)

1. 删除默认初始化文件
2. 根据需求创建文件夹 sre 文件夹下创建
    - styles 全局样式
    - utils 工具相关模块
    - services 接口模块功能
3. 导入要使用的 UI 库 `npm i element-ui -S`
    - 在 `main.js` 中完整引入 这样所有的组件都可以使用
    - `import ElementUI from "element-ui";`
    - `Vue.use(ElementUI);` 将 Element 注册为 Vue 插件
4. 样式处理 均在 styles 下创建
    - 放置样式变量的文件 `variables.scss`
    - 创建一个 `index.scss` 方式全局的样式 将 `index.scss` 引入 `main.js` 中
    - `reset.scss` 重置样式文件
    - `mixin.scss` 复用样式文件
    - 由于 `variables.scss` 会在多个地方用到，可以配置全局共享 [文档见](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)
    - `@` 代表的是 src
    - `~` 根目录
5. 路由处理 目录套文件的方式 在 views 目录下创建
    - 目录下需要有个初始的 `index.vue`
    - 在 router 目录下 `index.js` 配置路由
6. 路由优化 按需引用文件 路由懒加载 [文档见](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

    ```JavaScript
    // 路由规则
    // webpackChunkName 打包后的资源名
    const routes = [
    {
        path: "/login",
        name: "login",
        component: import(/* webpackChunkName: "index" */ "@/views/login/index"),
    },
    ];
    ```

7. 安装 axios， 并在 utils 目录下封装请求
    - `npm install axios`

    ```JavaScript
    import axios from "axios";

    // create 创建 axios 实例
    const request = axios.create({
    timeout: 5000,
    });

    function getBaseURL(url) {
    if (url.startsWith("/boos")) {
        return "http://eduboss.lagounews.com";
    } else {
        return "http://edufront.lagounews.com";
    }
    }

    // 请求拦截
    request.interceptors.request.use(function (config) {
    // 通过求情的 url 判断 baseUrl
    config.baseURL = getBaseURL(config.url);
    console.log(config);
    return config;
    });

    export default request;
    ```

8. Postman 接口测试
    - [下载 Postman](postman.com/downloads/)

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
