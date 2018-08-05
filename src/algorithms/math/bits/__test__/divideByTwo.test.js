import divideByTwo from '../divideByTwo';

describe('divideByTwo', () => {
  it('should divideByTwo correct', () => {
    expect(divideByTwo(0)).toEqual(0);
    expect(divideByTwo(1)).toEqual(0);
    expect(divideByTwo(2)).toEqual(1);
    expect(divideByTwo(3)).toEqual(1);
    expect(divideByTwo(125)).toEqual(62);
  });
});

