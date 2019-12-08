---
title: compact
---

# compact
去除数组中所有的否定值(`false`, `null`, `0`, `''`, `undefined`, `NaN`)。

## 示例
```js
compact([0, 1, false, 2, '', 3])
// => [1, 2, 3]
```

## 源码思路解析
* 检查数组是否为空
* 循环数组元素,通过if来筛选否定值(能过滤所有Boolean为false的值)
* 返回新数组

## 源码
```js
/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
  let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export default compact

```