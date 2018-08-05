import multiplyByTwo from '../multiplyByTwo';

describe('multiplyByTwo', () => {
  it('should multiplyByTwo correct', () => {
    expect(multiplyByTwo(0)).toEqual(0);
    expect(multiplyByTwo(1)).toEqual(2);
    expect(multiplyByTwo(2)).toEqual(4);
    expect(multiplyByTwo(4)).toEqual(8);
    expect(multiplyByTwo(125)).toEqual(250);
  });
});

