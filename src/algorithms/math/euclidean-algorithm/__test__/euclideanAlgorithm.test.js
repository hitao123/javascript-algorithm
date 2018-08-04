import euclideanAlgorithm from '../euclideanAlgorithm';

describe('euclideanAlgorithm', () => {
  it('should calculate euclide', () => {
    expect(euclideanAlgorithm(24, 72)).toBe(24);
    expect(euclideanAlgorithm(72, 24)).toBe(24);
    expect(euclideanAlgorithm(24, 0)).toBe(24);
    expect(euclideanAlgorithm(72, 32)).toBe(8);
    expect(euclideanAlgorithm(63, 32)).toBe(1);
  });
});
