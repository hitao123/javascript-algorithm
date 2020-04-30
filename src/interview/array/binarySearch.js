/**
 * [1, 2, 4, 9, 10] 9 ==> 3
 * 数组必须是排好序的
 * @param {*} arr
 * @param {*} num
 */
const binarySearch = (arr, num) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr shuold be array');
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) return mid;
    if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

export default binarySearch;
