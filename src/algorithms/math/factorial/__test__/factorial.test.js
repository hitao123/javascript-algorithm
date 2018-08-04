import factorial from '../factorial';

describe('factorial', () => {
  it('should calculate factorial', () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(4)).toEqual(24);
    expect(factorial(5)).toEqual(120);
    expect(factorial(10)).toEqual(3628800);
  });
});
