/**
 * 最小公倍数
 * @param {*} numA
 * @param {*} numB
 */
export default function euclideanAlgorithm(numA, numB) {
  const a = Math.abs(numA);
  const b = Math.abs(numB);

  return b === 0 ? a : euclideanAlgorithm(b, a % b);
}
