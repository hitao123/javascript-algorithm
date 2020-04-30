/**
 * arr [1, 2, [3, [4]], [[6], 7]] ==> [1, 2, 3, 4, 6, 7]
 * @param {*} arr
 */

const flattern = (arr = []) => {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattern(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

export default flattern;
