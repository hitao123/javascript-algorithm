/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * 快速排序
 * 选取一个节点， 小的在左边，大的在右边，递归进行
 * [1, 2, 10, 7] ===> [1, 2, 7, 10]
 * @param {*} arr
 */
const qSort = (arr, start = 0, end = arr.length - 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr shuold be array');
  }

  function swap(sArr, i, j) {
    let temp = null;
    temp = sArr[i];
    sArr[i] = sArr[j];
    sArr[j] = temp;
  }

  // 划分
  function partition(sArr, left, right) {
    const pivot = sArr[right];
    let cursor = left - 1;

    for (let i = left; i <= right - 1; i += 1) {
      if (sArr[cursor] < pivot) {
        swap(sArr, ++cursor, i);
      }
    }

    swap(sArr, ++cursor, right);

    return cursor;
  }

  if (start >= end) {
    return;
  }

  const index = partition(arr, start, end);
  qSort(arr, start, index - 1);
  qSort(arr, index + 1, end);
};

// console.log(qSort([1, 7, 6, 34, 23, 10, 2, 8]));

export default qSort;
