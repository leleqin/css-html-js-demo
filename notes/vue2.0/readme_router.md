# Vue Router

Vue Router 是 Vue.js 的官方插件，用来快速实现**单页应用**。

[toc]

## 单页应用（Single page Application）

网站中“所有”的功能都在单个页面呈现。

例如后台管理系统，小程序，移动端等。

优点：

- 前后端分离开发，提高开发效率
- 业务场景切换，局部更新结构
- 用户体验好，更接近本地应用

缺点：

- 不利于SEO
- 初次首屏加载慢
- 页面复杂度高

## 前端路由

**URL** 与**内容**之间的**映射关系***

[实例代码](https://github.com/leleqin/css-html-js-demo/blob/master/notes/vue2.0/index_router.html)

### Hash方式

通过 hashchange 事件监听 hash 变化，并进行网页内容更新。

```html
<div>
    <a href="#/">首页</a>
    <a href="#/category">分类页</a>
    <a href="#/about">关于页</a>
</div>
```

```JavaScript
// 原始方法 需用过逻辑判断 hash 从而执行动作
// 注意 window 的 onhashchange 方法
window.onhashchange = function () {
    // 获取 url 中的 hash
    var hash = location.hash;
    console.log(hash);
};

// 封装 hash
var router = {
    // 路由存储 url 和处理函数的对应关系
    routers: {},
    // 定义路由的规则
    route: function (path, callback) {
        this.routers[path] = callback;
    },
    // 初始化路由
    init() {
        var that = this;
        window.onhashchange = function () {
        var path = location.hash.replace("#", "");
        // 根据 hash 触发 router 中的对应 callback
        that.routers[path] && that.routers[path]();
        };
    },
};
// 开启 hash 监听 初始化
router.init();
// 定义路由规则
router.route("/", function () {
box.innerText = "首页内容";
});
router.route("/category", function () {
box.innerText = "分类内容";
});
router.route("/about", function () {
box.innerText = "关于内容";
});
```

特点：

- Hash方法兼容性好
- 地址中有 # 不太美观
- 前进后退功能繁琐
- 只能存储 2k 的数据

### History方式

采用 HTML5 提供的新功能实现前端路由

通过 `history.pushState()` 变更 URL 并执行对应操作

```JavaScript
// history 方式
var router = {
  routers: {},
  route(path, callback) {
    this.routers[path] = callback;
  },
  go(path) {
    // 第一个参数是 状态信息
    // 第二个参数是 浏览器 title 目前浏览器不支持传 null 或 ''
    // 第三个参数是 URL 路由路径
    history.pushState({ path: path }, null,path);
    this.routers[path] && this.routers[path]();
  },
  init() {
    var that = this;
    // 监听 popState 事件，可以前进后退
    window.addEventListener("popstate",function(e) {
      console.log(e);
      // state 为上述 pushState 的第一个参数的据
      that.routers[e.state.path] && that.routers[e.state.path]();
    });
  },
};
router.init();
// 获取 URL
var aList = document.querySelectorAll("a");
aList.forEach(function (item) {
  // 监听 a 标签事件
  item.addEventListener("click", function(event){
    // 这个路径是完整路径
    //   console.log(this.href);
    var href = item.getAttribute("href");
    console.log(href);
    router.go(href);
    // 清除默认事件
    event.preventDefault();
  });
});
router.route("/", function () {
  box.innerText = "首页内容";
});
router.route("/category", function () {
  box.innerText = "分类内容";
});
router.route("/about", function () {
  box.innerText = "关于内容";
});
```

特点：

- 兼容性差 ie10 开始支持
- 没有 #
- 支持前进后退
- `pushState` 可存储 640k 的信息
- 刷新时没有真正跳转，刷新时需要后端的支持

## Vue Router 使用

### 安装

方式一：

`npm install vue-router`

方式二：

链接引用

方式三：

直接下载

### 基本使用

Vue router 提供了用于进行路由设置的组件 `<router-link>` , `<router-view>`

代码参考: [demo](https://github.com/leleqin/css-html-js-demo/blob/master/notes/vue2.0/vue_router.html)

#### `<router-link>`

设置用于进行路由操作的组件

- to 跳转的路由链接

#### `<router-view>`

点击链接，切换组件

### 命名视图 `<router-view>`

导航后，希望同时在同级展示多个视图（组件）。具有一个以上的 `<router-view>` 需要给添加 name

只有一个的时候，name 为 default。

在路由中通过 components 属性设置不同视图的对应组件， key 为 name 。

### 动态路由

一类 URL 映射到同一个组件，就需要**动态路由**

#### 设置动态路由

将路径（path）中的某个部分使用 `:` 进行标记

路由后面 `:` 后的数据为 路径参数 ，存储在 `vm.$route.params` 中

#### 侦听路由参数

动态路由切换时，不会重新构建，而是去复用之前的组件。因此会造成切换路由时，无法监控到路由参数变化。

可以通过 `watch` 监听 `$route` 响应路由的参数变化

#### 路由传参处理

组件内部直接通过 `vm.$route.params` 访问，导致当前组件和路由高度耦合。当组件用在其他地方，通过父组件，或者其他组件传递，很不方便。

解决方式

- 通过路由的 props 设置数据， 并通过组件 props 接收。
- 当包含多个命名视图时，需要将路由的 props 设置为对象。
- 设置静态数据，可将 props 中某个组件对应的选项设置为对象，内部属性会绑定给组件的 props。

### 嵌套路由

通常由多层嵌套的组件组合而成，这时需要使用嵌套路由配置

- 使用 children 来进行路由中的子路由设置

### 编程式导航

通过编程的方式创建导航，通过方法设置导航

- `router.push()` 用来导航到一个新的URL。

```JavaScript
vm.$router.push('/user');
vm.$router.push({ path: '/user' });
vm.$router.push({ path: '/user/1' });
```

- `<router-link>` 的 to 属性使用绑定方式时也可以使用对象属性结构

```HTML
<router-link :to="{ path: '/user' }">用户</router-link>
```

#### 命名路由

给路由起个名字，设置路由时添加 name 属性

在 `router.push()` 中通过 name 导航到对应路由。

路由参数通过 params 设置

`<router-link>` 的 to 属性使用绑定方式时同理

```HTML
<router-link :to="{ name: 'nameinfo', params:{ id:3,a:1,b:2}}">命名路由</router-link>
```

```JavaScript
{
  path: "/pathname/:id/nameinfo",
  name: "nameinfo",
  component: PathName,
},
```

### 重定向

当通过 Vue Router 访问URL1的时候实际访问到了URL2，并匹配到了正确的路由，这个过程称为重定向

```JavaScript
// 访问 /category 时，重定向到 /
{
  path: "/category",
  redirect: "/",
}
```

### 别名

美化路由的方式

```JavaScript
// 
{
  path: "/category/:id/cat/:data",
  alias: "/:id/:data", // 别名，访问的时候 URL 不需要 path 那么长的路径
}
```

```HTML
<router-link to="/1/1234">别名</router-link>
```

### 导航守卫

路由发生改变时，通过跳转或取消的方式进行守卫的处理

比如某些路由需要用户登录后才可跳转，这个时候就需要导航守卫，来跳转到指定的页面

```JavaScript
router.beforeEach(function (to, from, next){
  next();// 确保有且只跳转一次 
  // next(false) 可以传参，传入 false ，阻止本次导航。
  // next() 传入一个 url 字符串，页面跳转。或者传入一个 对象 { path：'' } 
});
```

### History 模式

Vue Router 都是采用 hash 模式设置的，因此 path 前都有个 `#` 。因为 hash 模式的兼容性更好

可以设置 Vue Router 实例的 mode 选项来修改 history 模式

刷新会有跳转问题，需要后端支持避免问题

```JavaScript
var router = new VueRouter({
  mode: 'history',
  routes: [],
})
```
