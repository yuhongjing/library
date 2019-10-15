# 数据结构
## 排序
### 什么是稳定排序,不稳定排序。哪些排序算法是稳定排序,不稳定排序
### 快排的思路,时间复杂度
### 排序的优化,非递归写法
### 八个排序算法,时间复杂度,空间复杂度
#### 冒泡排序
解析:  
1. 比较两个相邻的元素,如果前一个比后一个元素大,则交换位置。
2. 第一轮下来,则最后一个元素是最大的,最后一个就不用比较了
3. 如此ｎ轮即可   

算法:  
```js
// 冒泡排序
function sort(array) {
    for(let i=0; i<array.length-1; i++) {
        for(let j=0; j<array.length-i-1; j++) {
            // 升序
            // 比较大小交换位置
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
```

#### 快速排序
解析:
1. 将数据分成两部分,左边比右边小
2. 递归调用(左边再分为两部分,右边也是再分为两部分)
3. 直到不可拆分,即可   

算法: 
```js
// 快速排序
function quickSort(array) {
    // 检查元素是否长度
    if(array.length <= 1) {
        return array;
    }
    // 寻找数组的中点
    let pivotIndex = Math.floor(array.length / 2);
    // 获取中点的元素,比此元素小在左边,比此元素大在右边
    let pivot = array.splice(pivotIndex, 1)[0];
    let left = [],
        right = [];
    for(let i=0; i<array.length; i++) {
        // 比较元素的中间的元素大小
        if(array[i] < pivot) {
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }
    // 递归合并左边数组中间元素和右边数组
    return quickSort(left).concat([pivot], quickSort(right));
}
```

#### 插入排序
解析: 
1. 从第一个元素开始,该元素假设已经排序
2. 取出下一位元素,在已经排序的元素序列中从后向前扫描
3. 如果该元素(已排序序列)大于新元素,将该元素后移一位
4. 重复步骤3,直到找到已排序元素小于或等于新元素的位置
5. 将新元素插入到下一位置中
6. 重复步骤2

算法:
```js
// 插入排序
function sort(array) {
    // 假设第0个元素是一个有序的数列,第一个以后的是无序数列
    // 所以从第一个元素开始将无序数列的元素插入到有序数列中
    for(let i=1; i<array.length; i++) {
        // 升序
        if(array[i] < array[i-1]) {
            // 取出无序数列的第i个作为被插入的元素
            let guard = array[i];
            // 记住有序数列的最后一个位置,并将有序数列的位置扩大一个
            let j = i - 1;
            array[i] = array[j];
            // 比大小,找到被插入元素的所在位置
            while(j >= 0 && guard < array[j]) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = guard; // 插入
        }
    }
    return array;
}
```

#### 选择排序
解析:  
1. 每轮寻找第n大的数字,放在倒数第n位
2. 重复n轮即可

算法:
```js
// 选择排序
function selectionSort(array) {
    let len = array.length;
    let minIndex, temp;
    for(let i=0; i<len-1; i++) {
        minIndex = i;
        for(let j = i+1; j<len; j++) {
            if(array[j] < array[minIndex]) { // 寻找最小数
                minIndex = j; // 记录最小数的位置
            }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}
```

#### 希尔排序
解析:  
1. 将数列分为若干(增量)子序列
2. 对每个序列分别进行直接插入排序
3. 缩小增量
4. 重复几轮,直到增量为1即可

算法:
```js
// 希尔排序
function shellSort(array) {
    let len = array.length;
        temp,
        gap = 1;
    while(gap < len / 5) { // 动态定义间隔序列
        gap = gap * 5 + 1;
    }
    for( ; gap>0; gap=Math.floor(gap /5)) {
        for(let i=gap; i<len; i++) {
            temp = array[i];
            for(let j=i-gap; j>=0 && array[j]>temp; j-=gap) {
                array[j+gap] = array[j];
            }
            array[j+gap] = temp;
        }
    }
    return array;
}
```

#### 归并排序
解析: 
1. 将数列均分为两部分,直至不可再分(序列为1)
2. 再将数列合并并排序
3. 重复2,直至不能合并(只有一个序列)

算法: 
```js
// 归并排序

// 拆分数组
function mergeSort(array) {
    let len = array.length;
    if(len < 2) { // 序列长度为1,不可拆分
        return array;
    }
    let middle = Math.floor(len / 2),   // 寻找中点
        left = array.slice(0, middle),  // 截取序列左边
        right = array.slice(middle);    // 截取序列右边
    // 合并拆分的序列
    return merge(mergeSort(left), mergeSort(right));
}

// 合并数组
function merge(left, right) {
    let result = [];
    while(left.length && right.length) {
        // 合并的同时需要排序
        if(left[0] <= right[0]) { 
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    // 如果左边还剩余有值,则直接填入
    while(left.length) {
        result.push(left.shift());
    }
    // 同上
    while(right.length) {
        result.push(right.shift());
    }
    return result;
}
```

#### 堆排序
解析:
1. 

#### 计数排序
#### 桶排序
解析:
1. 初始化n个桶,每个桶装一个区间的元素
2. 将元素映射到桶中
3. 对每个桶排序
4. 所有桶元素连起来

算法:
```js
// 桶排序
function bucketSort(array, num) {
    if(array.length <= 1) { // 检查数组长度
        return array;
    }
    let len = array.length,
        buckets = [],
        result = [],
        min = max = array[0],
        regex = '/^[1-9]+[0-9]*$/', // 检查num是否为数字
        space,
        n = 0;
    // 如果有num 就检查num是否合法 如果没有num 桶就默认为10个
    num = num || ((num > 1 && regex.test(num)) ? num : 10); 
    // 寻找最大值和最小值
    for(let i=1; i<len; i++) {
        min = min <= array[i] ? min: array[i];
        max = max >= array[i] ? max: array[i];
    }
    // 步长
    space = (max-min+1) / num;
    for(let j=0; j<len; j++) {
        let index = Math.floor((array[j]-min) / space);
        if(buckets[index]) { // 非空桶 插入值并排序
            let k = buckets[index].length - 1;
            // 这里是配合的直接插入排序
            while(k>=0 && buckets[index][k] > array[j]) {
                buckets[index][k+1] = buckets[index][k];
                k--;
            }
            buckets[index][k+1] = array[j]; 
        }else{ // 空桶 生存桶并插入值
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    // 合并桶
    while(n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    return result;
}
```

#### 基数排序
解析:
1. 根据数字的低位排序,然后收集
2. 再按照高位排序,然后收集
3. 以此类推,即可完成

算法:
```js
// 基数排序
function radixSort(array, maxDigit) {
    let mod = 10,
        dev = 1,
        counter = [];
    for(let i=0; i<maxDigit; i++, dev *= 10, mod *= 10) {
        for(let j=0; j<array.length; j++) {
            let bucket = parseInt((array[j] % mod) / dev);
            if(counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(array[j]);
        }
        let pos = 0;
        for(let j=0; j<counter.length; j++) {
            let value = null;
            if(counter[j] != null) {
                while((value = counter[j].shift()) != null) {
                    array[pos++] = value;
                }
            }
        }
    }
    return arr;
}
```

::: tip 提示
基数排序,计数排序,桶排序。它们都利用了桶的概念，但使用的方法有明显差异。 

基数排序: 根据键值的每位数字来分配桶。  
计数排序: 每个桶只存储单一键值。  
桶排序: 每个桶存储一定范围的数值。
:::

#### 时间复杂度排序表
算法|平均时间复杂度|最好情况|最坏情况|空间复杂度|排序方式|稳定性
:--:|:--:|:--:|:--:|:--:|:--:|:--:
冒泡|O(n²)|O(n)|O(n²)|O(1)|in-place|稳定
选择|O(n²)|O(n²)|O(n²)|O(1)|in-place|不稳定
插入|O(n²)|O(n)|O(n²)|O(1)|in-place|稳定
希尔|O(n*logn)|O(n*log2n)|O(n*log2n)|O(1)|in-place|不稳定
归并|O(n*logn)|O(n*logn)|O(n*logn)|O(n)|Out-place|稳定
快速|O(n*logn)|O(n*logn)|O(n²)|O(logn)|in-place|不稳定
堆  |O(n*logn)|O(n*logn)|O(n*logn)|O(1)|in-place|不稳定
计数|O(n+k)|O(n+k)|O(n+k)|O(k)|Out-place|稳定
桶  |O(n+k)|O(n+k)|O(n²)|O(n+k)|Out-place|稳定
基数|O(n*k)|O(n*k)|O(n*k)|O(n+k)|Out-place|稳定

### 二分查找

## 常用算法
### 用栈实现一个队列
### 链表如何实现
### 树的遍历查询