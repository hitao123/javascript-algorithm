import memorize from '../memorize';

describe('memorize function 🍜', () => {
  it('memorize should be ok', () => {
    const factorial = memorize((n) => {
      return (n <= 1) ? 1 : n * factorial(n - 1);
    });


    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});
