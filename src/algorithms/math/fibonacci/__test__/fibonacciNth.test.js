import fibonacciNth from '../fibonacciNth';

describe('fibonacciNth', () => {
  it('should calculate fibonacciNth', () => {
    expect(fibonacciNth(1)).toEqual(1);
    expect(fibonacciNth(2)).toEqual(1);
    expect(fibonacciNth(3)).toEqual(2);
    expect(fibonacciNth(4)).toEqual(3);
    expect(fibonacciNth(5)).toEqual(5);
    expect(fibonacciNth(6)).toEqual(8);
  });
});
