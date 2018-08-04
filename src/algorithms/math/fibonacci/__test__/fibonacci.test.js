import fibonacci from '../fibonacci';

describe('fibonacci', () => {
  it('should calculate fibonacci', () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(2)).toEqual([1, 1]);
    expect(fibonacci(3)).toEqual([1, 1, 2]);
    expect(fibonacci(4)).toEqual([1, 1, 2, 3]);
    expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
  });
});
