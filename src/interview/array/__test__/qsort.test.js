import qsort from '../qsort';

describe('array ==> qsort 🏀', () => {
  const arr = [11, 2, 10, 4, 8, 40, 23, 10];

  qsort(arr);
  it('should qsort array correct', () => {
    expect(arr).toEqual([2, 4, 8, 10, 10, 11, 23, 40]);
  });
});
