import twoSum from '../twoSum';

describe('array ==> twoSum 🏀', () => {
  it('should twoSum correct 1', () => {
    expect(twoSum([1, 3, 4, 7], 5)).toEqual([0, 2]);
  });

  it('should twoSum correct 2', () => {
    expect(twoSum([1, 3, 4, 7], 12)).toEqual([]);
  });
});
