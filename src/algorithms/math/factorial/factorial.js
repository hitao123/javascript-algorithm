/**
 * 阶乘递归
 * @param {Number} num
 */
export default function factorial(num) {
  let result = 1;
  if (num <= 1) {
    return result;
  }

  for (let i = 1; i <= num; i += 1) {
    result *= i;
  }
  return result;
}
