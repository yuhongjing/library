# Array
## chunk
**语法:**    
> **chunk(array, [size=1])**

**参数说明:**  
array: 数组  
size: 分割数值(可选, 默认1)

**返回数据:**  
array: 返回一个新的二维数组

**功能:**   
将数组分为每X个元素为一组并返回一个新的二维数组。 

**示例说明:**  
```js
chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]
```

**Loadsh chunk源码如下:**  
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

**源码思路解析:**  
1. 检查数组是否存在元素
2. 定义数组截取起始符(index)和二维数组大小(result)
3. 新数组大小是数组长度/切分长度，向上取整
4. 通过slice函数来截取新的数组并存入result,当`index == length`说明数组分割完成

## compact
**语法:**    
> **compact(array)**

**参数说明:**  
array: 数组  

**返回数据:**  
array: 返回一个新的数组

**功能:**   
去除数组中所有的否定值(`false`, `null`, `0`, `''`, `undefined`, `NaN`) 

**示例说明:**  
```js
compact([0, 1, false, 2, '', 3])
// => [1, 2, 3]
```

**Loadsh compact源码如下:**  
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

**源码思路解析:**  
1. 检查数组是否存在元素
2. 循环数组元素,通过if来筛选否定值
3. 返回即可

## concat
**语法:**    
> **concat(array, [values])**

**参数说明:**  
array: 数组  
values: 多个其他的值

**返回数据:**  
array: 返回一个数组

**功能:**   
将数组和任意的值或数组连接成为一个新数组

**示例说明:**  
```js
var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

**Loadsh concat源码如下:**  
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

**源码思路解析:**  
1. 检查函数的参数
2. 新生成一个数组并将参数依次放入
3. 检查传入的第一个参数是否为数组
4. 将数组扁平化一维（降一维）

## difference
**语法:**    
> **difference(array, [values])**

**参数说明:**  
array: 目标数组  
values: 多个其他的值

**返回数据:**  
array: 返回一个新数组

**功能:**   
找寻目标数组在后面数值中不被包含的值。

**示例说明:**  
```js
difference([2, 1], [2, 3])
// => [1]
```

**Loadsh difference源码如下:**  
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

**源码思路解析:**  
1. 判断传入的数组是否为类数组，否则返回空
2. 将后面的参数扁平化为1维的数组
3. 比较两个数组的值
4. 返回一个新数组，值为后面的数组不包含的数值