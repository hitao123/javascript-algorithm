import flattern from '../flattern';

describe('array ==> flttern 🏀', () => {
  it('should flttern array correct', () => {
    expect(flattern([1, 2, [3, [4]], [[6], 7]])).toEqual([1, 2, 3, 4, 6, 7]);
  });
});
