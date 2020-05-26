---
title: chunk
---

# chunk
将数组分为每X个元素为一组并返回一个新的二维数组。 

## 示例
```js
chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]
```

## 源码思路解析
* 检查数组是否存在元素
* 定义数组截取起始符(index)和二维数组大小(result)
* 新数组大小是数组长度/切分长度，向上取整
* 通过slice函数来截取新的数组并存入result,当`index == length`说明数组分割完成

## 源码
```js
import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk

```