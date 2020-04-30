/**
 * 找到 数组中两个数之和等于给出的数字并返回数组的索引
 * @param {*} arr
 * @param {*} num
 */
const twoSum = (arr, num) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr shuold be an array');
  }

  const map = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    const target = num - arr[i];
    if (map.get(target) !== undefined) {
      return [map.get(target), i];
    }
    map.set(arr[i], i);
  }

  // 时间复杂度 O(n^2)
  // for (let i = 0; i < arr.length; i += 1) {
  //   for (let j = 1; j < arr.length; j += 1) {
  //     if (arr[i] + arr[j] === num) {
  //       return [i, j];
  //     }
  //   }
  // }

  return [];
};

export default twoSum;
