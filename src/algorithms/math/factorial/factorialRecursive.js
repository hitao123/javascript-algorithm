/**
 * 阶乘递归
 * @param {Number} num
 */
export default function factorialRecursive(num) {
  return num > 1 ? num * factorialRecursive(num - 1) : 1;
}
