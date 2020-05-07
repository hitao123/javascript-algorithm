import curry from '../curry';

describe('curry function 🍜', () => {
  it('curry should be ok', () => {
    function add(a, b, c) {
      return a + b + c;
    }

    const curryAdd = curry(add);

    expect(curryAdd(1)(2)(3)).toBe(6);
    expect(curryAdd(1, 2)(3)).toBe(6);
    expect(curryAdd(1)(2, 3)).toBe(6);
  });
});
