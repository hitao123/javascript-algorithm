/**
 * flush
 * 数组乱序
 * [1, 2, 4, 7] ==> [2, 7, 1, 4]
 * @param {*} arr
 */
const flush = (arr = []) => {
  let temp;
  for (let i = 0; i < arr.length; i += 1) {
    const index = Math.floor((Math.random() * (arr.length - 1)));
    // exchange
    temp = arr[i];
    // eslint-disable-next-line no-param-reassign
    arr[i] = arr[index];
    // eslint-disable-next-line no-param-reassign
    arr[index] = temp;
  }

  return arr;
};

export default flush;
