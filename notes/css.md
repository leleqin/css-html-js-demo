# CSS 表现

从美观的角度描述页面样式

## 样式方式

* 内联式(行内式)
    * 写在标签上，没有脱离html
    * 让结构繁重
    * 无法复用
* 内嵌式 （推荐使用）
    * 结构样式初步分离
    * 无法多个文件复用
    * 页面可能会头重脚轻

```html
<head>
    <style type="text/css">
    </style>
</head>
```

* 外联式（推荐使用）
    * 结构样式完全分离
    * 可以在多个文件多次使用
    * 样式分层

```html
<head>
    <link rel="stylesheet" href="" type="text/css">
</head>
```

* 导入式
    * 会优先加载html

```html
<head>
    <style>
        @import url();
    </style>
</head>
```

## 单位

* 相对长度单位
    * px 像素值
    * em 倍数 继承自祖先的字号的倍数
    * % 百分比 继承自祖先的字号的百分比
* 绝对长度单位
    * in 英寸
    * cm 厘米
    * mm 毫米
    * pt 点

## 选择器

选择要添加样式的html标签的一种方法，模式

* 基础选择器（权重由上到下递减 权重一样，就近）
    * 通配符选择器 `* {}`
    * 标签选择器
    * 类选择器 `.class_name {}` （一般用于样式）
    * id选择器 `#id_name {}` （一般用于行为）
* 高级选择器
    * 后代选择器 `.class_name div p {}`
    * 交集选择器 `p.demo {}`
    * 并集选择器 `h2,.class_name {}`

## 层叠性

* 继承性
* 层叠性
    * important 在比较权重的过程中，important可以提升某条属性的权重到最大；在就近原则比较时无效。
    * 行内式的权重比选择器的权重高，但是低于！important。
