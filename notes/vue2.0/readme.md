# VUE2.0

[vue文档地址](https://cn.vuejs.org/v2/guide/)

基础学习代码见 notes/vue2.0

项目实践：TODOMVC

## 传统网页开发和Vue的MVVC模式开发区别

### 传统网页开发步骤

请求数据 -> 生成结构 -> 监听变化 -> 元素变化 -> 发送请求 -> 更新结构

缺点

- DOM操作频繁，代码繁杂
- DOM操作和逻辑代码混合，可维护性差
- 模块之间的依赖关系复杂

### 数据驱动视图

#### 单向数据绑定

数据变化会自动更新到对应的元素。

#### 双向数据绑定

对于可输入框等可输入元素，自动将输入内容更新到数据。实现数据和元素内容的双向绑定。

#### VUE的数据驱动视图（MVVM实现）

- M model 模型
- V view 视图
- VM ViewModel 业务逻辑

##### 优势

- 解放DOM操作
- view和model处理分离，降低耦合

#### 组件化开发

将网页功能封装为自定应HTML标签，复用时写自定标签即可

不仅封装结构，可以封装样式和逻辑，提高开发效率和可维护性

## Vue实例

通过Vue函数创建的对象，以使用Vue的功能

```JavaScript
var vm = new Vue({
  el: "#app",
  data: {
    num: 100,
  },
});
console.log(vm.$el);
console.log(vm.$data.num);
console.log(vm.num);
```

### `el`

- 用于选取一个DOM元素作为Vue实例的挂载目标;
- 只有挂载元素内部才会被Vue进行处理，外部为普通的HTML元素;
- View层;
- 不可以是body或者html;
- 可以通过 `vm.$mount('#app')`挂载

### 插值表达式 `{{}}`

- 可以通过插值表达式，为元素动态设置内容
- 只能书写在标签内容区域，内部只能写JavaScript表达式，不能写语句

### `data`

- 用于存储Vue实例需要使用的数据，值为对象。
- 可以通过`vm.$data.num`或`vm.num`访问，或者直接赋值
- 当 data 的数据为数组或对象时，索引和length操作无法自动更新视图。可以使用 `Vue.set()` 代替

### `methods`

- 用于存储Vue实例需要使用的时函数。
- `methods` 的方法可以通过 `vm.` 的方式调用
- 函数中可以调用 `this` 访问 vm 的实例

## Vue指令

指令的本质是html自定义属性，是以 `v-` 开头的自定义属性

### `v-once`

使元素内部的插值表达式只生效一次

### `v-text`

内容整体替换为指定纯文本内容

### `v-html`

元素内容整体替换为指定的html文本

## 属性绑定

### `v-bind`

- 动态绑定Html属性
- 简写 `:`
- 可以一次绑定多个属性，还可以绑定对象
- 可以使用表达式

### `Class`

- `class` 是 `html` 属性，可以通过 `v-bind` 绑定
- 可以与 `class` 共存
- 对于 `class` 的绑定有特殊的处理方式，可以通过对象，数组的方式动态绑定

```html
<p :class = '{ a: isShowA, b: isShowB, "c-c": true }'>class的特殊处理绑定1</p>
<p :class = '[ "a", {b: isShowA}, "c" ]'>class的特殊处理绑定2</p>
```

### `Style`

- `style` 是 `html` 属性，可以通过 `v-bind` 绑定
- 可以与 `style` 共存

```html
<p :style = '[styleObj,styleObj2]' style="height: 300px;">style绑定</p>
```

## 渲染指令

### `v-for`

- 用于遍历数据渲染结构，数组和对象都可以遍历
- 使用 `v-for` 应始终指定唯一的 `key` 可以提高渲染性能并避免问题
- 可以使用 `<template>` 标签设置模板占位符，可以将部分元素整体进行操作

### `v-show`

- 控制元素是否显示 相当于 `dispaly:none`
- 适用于显示隐藏频繁切换时使用
- `<template>` 没有 `v-show` 属性，因为 `<template>` 本身就不是 html 标签

### `v-if`

- 根据条件创建或移除
- 出于性能考虑，应避免将 `v-if` 与 `v-for` 应用于同一标签。vue 中会先执行 `v-for` 与 `v-if`

## 事件处理 `v-on` 指令

- 用于元素的事件绑定
- 简写 `@事件名=''`
- 在 `methods` 中设置函数
- 可以从参数中接收事件对象

```html
<input type="button" 
        value="提交" 
        @click="submit(content,$event)">
```

```JavaScript
new Vue({
  el: "#app2",
  data: {},
  methods: {
    submit(content, event) {
      this.isShow = !this.isShow;
      console.log("事件", content, event);
    },
  }
});
```

## 表单输入绑定 `v-model` 指令

- 用于给 `<input>` 、`<textarea>` 及 `<select>` 元素设置双向数据绑定。
- `<input type="radio"` 单个复选框的值为 `true` or `false`
- `<input type="checkbox">` 多个复选框的值为 `[]` 数组，放置选中的选框的 `value`
- `<select>` 单选，值为 `option` 的 value
- `<select multiple>` 多选，值为 `option` 的 value 组成的数组

## 修饰符

修饰符是以 `.` 开头的指令后缀，用于给当前指令设置特殊操作

[修饰符](https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E7%A0%81)

### 事件修饰符

- `.prevent` 用于阻止默认事件行为。相当于 `event.preventDefault()`
- `.stop` 用于阻止事件传播。相当于 `event.stopPropagation()`
- `.once` 用于设置事件只触发一次

### 按键修饰符

按键码：将按键的按键码作为修饰符使用以标识按键的操作方式。

keyCode也是允许的

特殊按键：指的是键盘中类似 esc、enter、delete 等功能按键， 为了更好的兼容性，应首选内置别名

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

### 系统修饰符

指的是 ctrl 、alt 、shift 等按键，单独点击系统操作符无效。系统按键通常与其他按键组合使用。

- `.ctrl`
- `.alt`
- `.shift`
- `.meta` meta 对应 command 键 (⌘).在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)

### 鼠标按键修饰符

用于设置点击事件由鼠标哪个按键来完成

- `.left`
- `.right`
- `.middle`

### `v-model` 修饰符

- `.trim` 用于自动过滤用户输入的首尾两端的空格
- `.lazy` 用于将 v-model 的触发方式由 input 事件触发更改为 change 事件触发
- `.number` 自动将用户输入的值转化为数值类型，若无法被转换返回原始内容

## 自定义指令

[自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html#ad)

指令：使用Vue指令替代传统的DOM的操作，相当于对基础DOM操作的封装。

自定义指令：通过自定义指令，设置Vue内置指令不具备的DOM操作。

### 自定义全局指令

可以被任意Vue实例或组件使用指令

### 自定义局部指令

可以在当前Vue实例或组件内使用的指令

## 过滤器

用于进行文本内容格式化处理。

- `{{}}`插值表达式使用
- `v-bind`使用
- `|` 通过管道符连接使用
- 支持多个过滤器
- 局部过滤器和全局过滤器重名，局部过滤器会层叠掉全局过滤器（执行局部过滤器）

### 全局过滤器 `filter`

可以在任意Vue实例中使用

### 局部过滤器 `filters`

只能在当前Vue实例中使用

## 计算属性 `computed`

Vue的视图不建议书写复杂的逻辑。

可以通过封装函数计算，但是会消耗不必要的性能。

计算属性使用时为属性形式，访问时会自动执行对应函数。

多个相同的调用，只会执行一次，当执行的返回数据有改变，才会再次执行。

### `computed` 和 `methods` 的区别

- `computed` 具有缓存性，`methods` 没有
- `computed` 通过属性名访问，`methods` 需要调用
- `computed` 仅适用于计算操作

### `setter`

计算属性默认只有 `getter`, Vue.js也允许给计算属性设置 `setter`

## 侦听器 `watch`

监听数据变化，并执行指定操作

对象**内部**修改需要设置 `deep` 和 `handler` 进行深度监听

当更改（非替换）对象或数组时，回调函数中的新值和旧值相同，因为他们的引用都指向同一个数组、对象。

修改数组不能通过 length 和索引的方式触发侦听器。要使用数组的方法才可以

## Vue DevTools

调试Vue应用的工具

- 网页应用了Vue.js
- 网页通过http协议打开
- 网页使用Vue.js 而不是 Vue.min.js

## Vue.js 生命周期

实例从创建到运行，再到销毁的过程

[生命周期](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

1. 初始化
2. 挂载
3. 更新
4. 销毁

### 声明周期函数

在特定生命周期执行的函数（钩子）

#### 创建阶段

每个实例只能执行一次

- `beforeCreate` 实例初始化之前调用
- `created` 实例创建后调用（data，和methods都创建完了）
- `beforeMount` 实例挂载之前调用 DOM 还没有渲染完毕
- `mounted` 实例挂载完毕 可以拿到el的值了

#### 运行阶段

按需调用，无次数限制

- `beforeUpdate` 数据更新后，视图更新前调用
- `updated` 视图更新后调用

#### 销毁阶段

- `beforeDestory` 实例销毁之前调用
- `destoryed` 实例销毁后调用
