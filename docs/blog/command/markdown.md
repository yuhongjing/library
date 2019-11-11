---
title: markdown语法
sidebarDepth: 1
---

## markdown语法大全

## 标题
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 字体
```markdown
*斜体*
**加粗**
***斜体加粗***
~~删除线~~
```

## 引用
```markdown
> 一级引用
>> 二级引用
>>>>>>>>>> N级引用
```

## 分割线
```markdown
---
----
***
****
// 效果一样，三个或三个以上'-'或'*'就生成分割线
```

## 图片
```markdown
// title可以不添加
![我是没加载出图片时的文本](图片地址 '我是图片的title')
```

## 超链接
```markdown
// title可以不添加
[链接文字](链接地址 '地址title')
```

## 列表
```markdown
// 无序列表('-', '+', '*')都可以
* 无序列表
* 无序列表
* 无序列表

// 有序列表 数字加点
1. 有序列表
2. 有序列表
3. 有序列表

// 列表嵌套 上一级和下一级列表敲三个空格 可以混用
* 一级无须列表
   1. 二级有序列表
   2. 二级有须列表
   3. 二级有须列表
* 一级无须列表
* 一级无须列表
```

## 表格
```markdown
// --- 或 :-- 左对齐
// :--: 居中对齐
// ---: 右对齐

表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容
```

::: tip 注意
可能有些markdown的解析出问题，必须两边也添加|  
例如 `|内容|内容|内容|` 两边不能空
:::

## 代码
```markdown
`我是单行代码`

(```我是代码的种类(例如js)
    我是多行代码
    我是多行代码
    我是多行代码
```)

```

## 流程图
我也不咋用, 贴一个别人的吧
```markdown

(```flow
  st=>start: 开始
  op=>operation: My Operation
  cond=>condition: Yes or No?
  e=>end
  st->op->cond
  cond(yes)->e
  cond(no)->op
&```)

```