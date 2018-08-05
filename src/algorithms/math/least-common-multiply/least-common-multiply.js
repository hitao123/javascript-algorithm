import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';
/**
 * 最小公倍数
 * @param {Number} numA
 * @param {Number} numB
 */
export default function leastCommonMultiply(numA, numB) {
  return (numA === 0 || numB === 0) ? 0 : Math.abs(numA * numB) / euclideanAlgorithm(numA, numB);
}
