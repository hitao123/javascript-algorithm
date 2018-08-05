import switchSign from '../switchSign';

describe('switchSign', () => {
  it('should calculate switchSign correct', () => {
    expect(switchSign(0)).toEqual(0);
    expect(switchSign(2)).toEqual(-2);
    expect(switchSign(6)).toEqual(-6);
  });
});

