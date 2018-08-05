import leastCommonMultiply from '../least-common-multiply';

describe('leastCommonMultiply', () => {
  it('should calculate leastCommonMultiply correct', () => {
    expect(leastCommonMultiply(0, 4)).toBe(0);
    expect(leastCommonMultiply(4, 9)).toBe(36);
    expect(leastCommonMultiply(4, 12)).toBe(12);
    expect(leastCommonMultiply(36, 24)).toBe(72);
    expect(leastCommonMultiply(-36, 24)).toBe(72);
  });
});

