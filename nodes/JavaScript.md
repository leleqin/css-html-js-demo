# JavaScript

## JavaScript组成

由ECMAscript和DOM和BOM组成。

ECMAscript可以理解为JavaScript

## 将Javascript应用到网页的方式

第一种：写在 html 中的 `<script>` 标签中

```html
<head>
    <script>

    </script>
</head>
```

第二种：写在外部 js 文件中，在页面引入

```html
<script src = "main.js"></script>
```

## prompt() 语句

弹出一个对话框，内部有一个提示语句以及一个输入框，可以在输入框中根据提示
任意输入内容。

```JavaScript
var m = prompt('输入', 1);
```

## 数据类型

* 简单数据类型
  * Number 数字类型 整数、浮点数、特殊值，都是 Number 类型。
  * String 字符串类型 字符串都是字符串类型。
  * undefined undefined类型 表示未定义 变量只声明的时候值默认是 undefined。
  * Boolean 布尔类型 true 和 false。
  * null null类型 null 值表示一个空对象指针。

* 复杂数据类型
  * Object 对象类型

## 检测数据类型

```JavaScript
typeof(1);
typeof 1;
```

谷歌浏览器中：

字符串的颜色是黑色的，数值类型是蓝色的，布尔类型也是蓝色的，undefined和null是灰色的。

## 操作符非正常情况

* 转为false：NaN、0、“”空字符串、null、undefined
* 转为true：非0 非NaN数字、非空字符串
