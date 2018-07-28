import Comparator from '../Comparator';

describe('Comparator', () => {
  it('should compare with default comparator function', () => {
    const comparator = new Comparator();
    expect(comparator.equal(1, 1)).toBeTruthy();
    expect(comparator.equal(2, 1)).toBeFalsy();
    expect(comparator.equal('a', 'a')).toBeTruthy();
    expect(comparator.equal('a', 'aa')).toBeFalsy();
    expect(comparator.equal(0, 0)).toBeTruthy();

    expect(comparator.greaterThan(3, 1)).toBeTruthy();
    expect(comparator.greaterThan(3, 3)).toBeFalsy();
    expect(comparator.greaterThan('a', 'b')).toBeFalsy();
    expect(comparator.greaterThan('ab', 'aaa')).toBeTruthy();

    expect(comparator.lessThan(2, 100)).toBeTruthy();
    expect(comparator.lessThanOrEqual(3, 3)).toBeTruthy();
    expect(comparator.greaterThanOrEqual(30, 30)).toBeTruthy();
    expect(comparator.greaterThanOrEqual(30, 10)).toBeTruthy();
  });

  it('should compare with custom comparator function', () => {
    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    expect(comparator.equal('a', 'b')).toBeTruthy();
    expect(comparator.greaterThan('aa', 'a')).toBeTruthy();
    expect(comparator.greaterThan('a', 'aa')).toBeFalsy();
    expect(comparator.lessThan('a', 'abb')).toBeTruthy();
    expect(comparator.lessThanOrEqual('a', 'an')).toBeTruthy();
    expect(comparator.greaterThanOrEqual('ccc', 'c')).toBeTruthy();

    comparator.reverse();

    expect(comparator.equal('a', 'b')).toBeTruthy();
    expect(comparator.greaterThan('aa', 'a')).toBeFalsy();
    expect(comparator.lessThan('a', 'abb')).toBeFalsy();
    expect(comparator.lessThanOrEqual('an', 'a')).toBeTruthy();
    expect(comparator.greaterThanOrEqual('c', 'ccc')).toBeTruthy();
  });
});
