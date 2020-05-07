import deepClone from '../deepClone';

describe('utils deepClone 🍜', () => {
  it('deepClone object should be correct', () => {
    expect(deepClone({}, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    expect(deepClone({}, { a: 1, b: { c: 3 } })).toEqual({ a: 1, b: { c: 3 } });
    expect(deepClone({}, { a: 1, b: { c: [1, 2] } })).toEqual({ a: 1, b: { c: [1, 2] } });
  });

  it('deepClone array should be correct', () => {
    const obj = { a: 1, b: { c: [1, { c: 3 }] } };
    const deepObj = deepClone({}, obj);
    deepObj.a = 2;
    deepObj.b.c.push(3);
    expect(obj).toEqual({ a: 1, b: { c: [1, { c: 3 }] } });
    expect(deepObj).toEqual({ a: 2, b: { c: [1, { c: 3 }, 3] } });
  });
});
