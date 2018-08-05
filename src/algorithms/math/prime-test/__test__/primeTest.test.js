import primeTest from '../primeTest';

describe('primeTest', () => {
  it('should judge primeTest', () => {
    expect(primeTest(-1)).toBeFalsy();
    expect(primeTest(1)).toBeFalsy();
    expect(primeTest(2)).toBeTruthy();
    expect(primeTest(3)).toBeTruthy();
    expect(primeTest(13)).toBeTruthy();
    expect(primeTest(14)).toBeFalsy();
  });
});

