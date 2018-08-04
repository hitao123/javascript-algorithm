import factorialRecursive from '../factorialRecursive';

describe('factorialRecursive', () => {
  it('should calculate factorialRecursive', () => {
    expect(factorialRecursive(0)).toEqual(1);
    expect(factorialRecursive(1)).toEqual(1);
    expect(factorialRecursive(2)).toEqual(2);
    expect(factorialRecursive(3)).toEqual(6);
    expect(factorialRecursive(4)).toEqual(24);
    expect(factorialRecursive(5)).toEqual(120);
    expect(factorialRecursive(10)).toEqual(3628800);
  });
});
