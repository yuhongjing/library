---
title: difference
---

# difference
找寻目标数组在后面数值中不被包含的值，相当于求A与B的差集，也叫做相对补集，就是属于A但是不属于B的元素。

## 示例说明
```js
difference([2, 1], [2, 3])
// => [1]
```

## 源码思路解析
* 判断传入的数组是否为类数组，否则没有比较意义直接返回空数组
* 因为使用了解构，所以后面的参数是一个二维数组，需要将其扁平化为1维的数组
* 比较两个数组的值
* 返回一个新数组，值为后面的数组不包含的数值

## 源码
```js
import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}
```