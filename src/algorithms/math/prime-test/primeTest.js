/**
 * 判断是否是质数
 * @param {Number} num
 */
export default function primeTest(num) {
  // 判断是不是整数
  if (num % 1 !== 0) {
    return false;
  }
  // 质数大于1
  if (num <= 1) {
    return false;
  }
  // 2，3 都是质数， 1 既不是质数也不是合数
  if (num <= 3) {
    return true;
  }
  // 偶数
  if (num % 2 === 0) {
    return false;
  }

  const divideLimit = Math.sqrt(num);
  // 这里不逐一判断是因为偶数已经判断了
  for (let divider = 3; divider <= divideLimit; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
}
