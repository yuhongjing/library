---
title: concat
---

# concat
将数组和任意的值或数组连接组合成为一个新数组。

## 示例
```js
var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

## 源码思路解析
* 检查函数的参数是否为空
* 根据`arguments`长度减`1`生成一个新数组(除去`arguments[0]`)
* 检查传入的目标数据(`arguments[0]`)是否为数组，是则复制一个新的数组，不是就变为数组
* 将传入的参数数组扁平化一维(降一维)

## 源码
```js
/**
* Creates a new array concatenating `array` with any additional arrays
* and/or values.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Array
* @param {Array} array The array to concatenate.
* @param {...*} [values] The values to concatenate.
* @returns {Array} Returns the new concatenated array.
* @example
*
* var array = [1];
* var other = _.concat(array, 2, [3], [[4]]);
*
* console.log(other);
* // => [1, 2, 3, [4]]
*
* console.log(array);
* // => [1]
*/
function concat() {
    var length = arguments.length;
    if (!length) {
        return [];
    }
    var args = Array(length - 1),
        array = arguments[0],
        index = length;

    while (index--) {
        args[index - 1] = arguments[index];
    }
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}
```