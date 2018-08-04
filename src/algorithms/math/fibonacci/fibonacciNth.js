/**
 * 斐波那契数
 * @param {Number} num
 * @return {Number}
 */
export default function fibonacciNth(num) {
  let previousValue = 0;
  let currentValue = 1;

  if (num === 1) {
    return 1;
  }

  let iteratorCounter = num - 1;

  while (iteratorCounter) {
    currentValue = previousValue + currentValue;
    previousValue = currentValue - previousValue;

    iteratorCounter -= 1;
  }
  return currentValue;
}
