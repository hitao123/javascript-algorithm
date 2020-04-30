import binarySearch from '../binarySearch';

describe('array ==> binarySearch 🏀', () => {
  const arr = [0, 1, 5, 6, 10, 12, 13, 14, 15, 16, 20, 22, 24, 25];
  it('should binarySearch correct', () => {
    expect(binarySearch(arr, 2)).toBe(-1);
    expect(binarySearch(arr, 10)).toBe(4);
    expect(binarySearch(arr, 0)).toBe(0);
    expect(binarySearch(arr, 25)).toBe(arr.length - 1);
    expect(() => binarySearch()).toThrow(TypeError);
  });
});
