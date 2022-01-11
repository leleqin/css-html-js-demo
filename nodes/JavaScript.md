# JavaScript

## JavaScript 组成

由 ECMAscript 和 DOM 和 BOM 组成。

ECMAscript 可以理解为 JavaScript

## 将 Javascript 应用到网页的方式

第一种：写在 html 中的 `<script>` 标签中

```html
<head>
  <script></script>
</head>
```

第二种：写在外部 js 文件中，在页面引入

```html
<script src="main.js"></script>
```

## prompt() 语句

弹出一个对话框，内部有一个提示语句以及一个输入框，可以在输入框中根据提示
任意输入内容。

```JavaScript
var m = prompt('输入', 1);
```

## 数据类型

- 简单数据类型（值类型，变量中存的是**值本身**）
  - Number 数字类型 整数、浮点数、特殊值，都是 Number 类型。
  - String 字符串类型 字符串都是字符串类型。
  - undefined undefined 类型 表示未定义 变量只声明的时候值默认是 undefined。
  - Boolean 布尔类型 true 和 false。
  - null null 类型 null 值表示一个空对象指针。

简单数据类型，变量赋值给另一个变量，是将值本身复制了一份，给另一个变量，两个变量之间没有联系。一个变化，另一个不会同时变化。

- 复杂数据类型（引用类型，变量中存储的是**地址**）
  - Object 对象类型
    - 函数的数据类型 Function，属于 Object，可以是其他函数的参数，或者返回值。

复杂数据类型，变量赋值给另一个变量，相当于将地址复制一份给了新的变量，两个变量的地址相同，指向的是同一个原型，不论通过哪个地址更改了原型，都是在原型上发生的更改，两个变量下次访问时，都会发生变化。

数组和函数也是存储的是地址。

## 检测数据类型

```JavaScript
typeof(1);
typeof 1;
```

谷歌浏览器中：

字符串的颜色是黑色的，数值类型是蓝色的，布尔类型也是蓝色的，undefined 和 null 是灰色的。

## 操作符非正常情况

- 转为 false：NaN、0、“”空字符串、null、undefined
- 转为 true：非 0 非 NaN 数字、非空字符串

## 堆和栈

1. 栈（操作系统）：由操作系统自动分配释放，存放函数的参数值，局部变量值等。存储简单数据类型。
2. 堆（操作系统）：存储复杂类型（对象），一般由程序员分配释放，若无代码分配释放，则由垃圾回收机制回收。

## 字面量

用于表达一个固定值的表示法，又叫常量。

数组的字面量是`[]`。

## 转义字符`/`

- `\n` 换行
- `\t` Tab 制表
- `\'` 单引号
- `\"` 双引号
- `\\` 反斜杠

## 数组

### 创建方法

字面量创建

```JavaScript
var arr = [];
```

构造函数创建

```JavaScript
var arr = new Array();
// 在数组末尾添加元素
arr.push(1); // return 数组长度
// 删除末尾的元素
arr.pop(); // return 删掉的数据
// 删除第一项元素
arr.shift(); // return 删掉的数据
// 在数组第一位添加元素
arr.unshift(2); // return 数组长度
```

### 检测数组类型

`instanceof` 检测某个实例是否是某个对象类型

```JavaScript
console.log(arr instanceof Array);
// true or false;
```

## 函数

### 函数返回值

如果函数没有 return 语句，那么函数有默认的返回值 undefined；

如果函数使用 return 语句，但是 return 后面没有任何值，那么函数的返回值也是 undefined。

### arguments 对象

函数内部有个 arguments 对象，用于接收所有的实参。

函数的的实参可以大于定义的形参个数。

可以在函数中直接使用`arguments`查看实参。

### IIFE 自调用函数

表示函数在调用的时就立即执行。类似于一次性函数。

调用方法： 在函数**表达式**的**变量名**后面加`()`运算符。

```JavaScript

  var foo = function fun() {
      console.log(2);
  }();

  // 将函数矮化成表达式
  + function fun() {
    console.log(1);
  }();

  - function fun() {
    console.log(1);
  }();

  (function fun() {
    console.log(1);
  })();

  !function fun() {
    console.log(1);
  }();

  // 常用的 IIFE 结构
  (function (a) {
    console.log(a);
  })(4);

```

## 对象

### 创建方法

#### 对象字面量：`{}`

```JavaScript
var obj = {
k: v,
k: v,
k: v
};

// 删除属性
delete obj.k;
```

#### new Object()方法

```JavaScript
var person = new Object();
```

`new`在执行时做的事情

- 在内存中创建一个新的空的对象
- new 会让 this 指向这个新的对象
- 执行构造函数 目的：给这个新的对象加属性和方法
- new 会返回这个新对象

#### 工厂函数创建对象

相当于对`new Object()`方法的一个封装

```JavaScript
  function createPerson(name,age,sex) {
    // 创建一个空对象
    var person = new Object();
    // 添加属性和方法，属性可以接受参数的值
    person.name = name;
    person.age = age;
    person.sex = sex;
    person.sayHi = function () {
      console.log("hello");
    };
    // 将对象作为函数的返回值
    return person;
  }
  // 想创建一个对象，可以调用工厂函数
  var p1 = createPerson("zs",18,true);
  var p2 = createPerson("ls",19,false);
```

#### 自定义构造函数 (常用)

函数名大写

```JavaScript
function Person(name,age,sex) {
  // 不需要使用 new 一个新对象
  // 用 this 替代将来创建的新对象
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sayHi = function () {
    console.log("hello");
  };
  // 不需要添加 return
}
// 用 new 关键字调用构造函数
var p1 = new Person("zs",18,true);
```

### 遍历对象

`for in`

```JavaScript
for (var k in person1) {}
```
