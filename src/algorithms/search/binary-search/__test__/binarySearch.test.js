import binarySearch from '../binarySearch';

describe('binarySearch', () => {
  it('should search number in sorted array', () => {
    expect(binarySearch([], 1)).toEqual(-1);
    expect(binarySearch([1], 1)).toEqual(0);
    expect(binarySearch([1, 3, 7, 8, 13, 16, 34, 67], 10)).toEqual(-1);
    expect(binarySearch([1, 3, 7, 8, 13, 16, 34, 67], 8)).toEqual(3);
  });

  it('should search number in custom compare', () => {
    const sortedArrayOfObjects = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
    ];
    const customCompare = (objA, objB) => {
      if (objA.key === objB.key) return 0;
      return objA.key > objB.key ? 1 : -1;
    };


    expect(binarySearch(sortedArrayOfObjects, { key: -1 }, customCompare)).toEqual(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 1 }, customCompare)).toEqual(0);
  });
});
