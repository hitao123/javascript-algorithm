import Comparator from '../../../utils/comparator/Comparator';
/**
 * 线性查找数组中元素出现索引
 * @param {Number} array
 * @param {Number} seekElement
 * @param {Function} comparatorCallback
 */
export default function linearSearch(array, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  const foundIndices = [];

  array.forEach((element, index) => {
    if (comparator.equal(element, seekElement)) {
      foundIndices.push(index);
    }
  });

  return foundIndices;
}
