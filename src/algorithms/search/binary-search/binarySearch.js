import Comparator from '../../../utils/comparator/Comparator';
/**
 * 二分查找
 * @param {[]} sortedArray 排好序的数组
 * @param {*} seekElement 待查找元素
 * @param {*} comparatorCallback 定制比较方法
 */
export default function binarySearch(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((endIndex + startIndex) / 2);

    if (comparator.equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }

    if (comparator.lessThan(sortedArray[middleIndex], seekElement)) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}
