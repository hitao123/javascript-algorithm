import flush from '../flush';

describe('array ==> flush 🏀', () => {
  it('should flush array correct', () => {
    expect(flush([1, 2, 3, 7, 9, 10])).not.toBe([1, 2, 3, 7, 9, 10]);
  });
});
