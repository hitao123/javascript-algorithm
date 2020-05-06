/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * 快速排序
 * 选取一个节点， 小的在左边，大的在右边，递归进行
 * [1, 2, 10, 7] ===> [1, 2, 7, 10]
 * @param {*} arr
 */
const qSort = (arr, left = 0, right = arr.length - 1) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr shuold be array');
  }

  // 方法一 这种好久没看懂
  // function swap(i, j) {
  //   let temp = null;
  //   temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;
  // }

  // // 划分
  // function partition(left, right) {
  //   const pivot = arr[right];
  //   let cursor = left - 1;

  //   for (let i = left; i <= right - 1; i += 1) {
  //     if (arr[i] <= pivot) {
  //       swap(++cursor, i);
  //     }
  //   }

  //   swap(++cursor, right);

  //   return cursor;
  // }

  // if (start >= end) {
  //   return;
  // }

  // const index = partition(start, end);

  // 方法二

  if (left >= right) {
    return;
  }

  const pivot = arr[left];
  let cursor = left;

  let i = left;
  let j = right;

  while (i < j) {
    while (i < j && arr[j] >= pivot) {
      j -= 1;
    }

    if (i < j) {
      arr[cursor] = arr[j];
      cursor = j;
    }

    while (i < j && arr[i] <= pivot) {
      i += 1;
    }

    if (i < j) {
      arr[cursor] = arr[i];
      cursor = i;
    }
  }

  arr[cursor] = pivot;

  qSort(arr, left, cursor - 1);
  qSort(arr, cursor + 1, right);
};

export default qSort;
