/**
 * 斐波那契数
 * @param {Number} num
 * @return {Number} []
 */
export default function fibonacci(num) {
  const fibSequence = [1];
  let previousValue = 0;
  let currentValue = 1;

  if (num === 1) {
    return fibSequence;
  }

  let iteratorCounter = num - 1;

  while (iteratorCounter) {
    currentValue = previousValue + currentValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);
    iteratorCounter -= 1;
  }
  return fibSequence;
}
