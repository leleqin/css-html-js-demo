# 网站项目开发流程

## 页面布局

1. 确定页面的版心
**版心**：网页中主要内容区域。
一般有的宽度值：960px,980px,1000px,1200px等。
一般采用margin方法居中。
2. 分析页面中的行模块，以及每个行模块中的列
3. 制作HTML页面，和CSS文件

## 文件夹结构

给不同功能的文件分类：

基本结构：css，images，index.html

## HTML文件结构

### `<head>`内

- `<title>`
- 标签页icon
`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />`
- css分级引入 按照功能进行分层管理
    1. 清除默认样式 （例如：reset.css）
    2. 网站公共样式 （例如：common.css）
    3. 每个页面独有的样式（层叠公共样式）（例如：index_banner.css）

### header区域

网页顶部常用命名header。通常包含logo，nav。

- logo：常用h1>a结构
- nav：常用ul>li>a列表结构搭建

### 主体区域

主体区域一般包含网页主要内容，通常有几种类型。

- 圣杯布局
- 双飞翼

### footer区域

一般包括copyright和联系方式等。
