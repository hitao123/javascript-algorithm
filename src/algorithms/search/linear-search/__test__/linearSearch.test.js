import linearSearch from '../linearSearch';

describe('linearSearch', () => {
  it('should find all search item index', () => {
    expect(linearSearch([1, 2, 4, 3, 2], 2)).toEqual([1, 4]);
    expect(linearSearch([1, 2, 4, 3, 2], 8)).toEqual([]);
    expect(linearSearch([1, 2, 4, 3, 2], 1)).toEqual([0]);
  });

  it('should search all string in array', () => {
    const array = ['a', 's', 'a', 'u', 't'];

    expect(linearSearch(array, 'a')).toEqual([0, 2]);
    expect(linearSearch(array, 's')).toEqual([1]);
    expect(linearSearch(array, 'v')).toEqual([]);
  });

  it('should use custom compare search linear', () => {
    const array = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
      { key: 6, value: 'value3' },
      { key: 2, value: 'value3' },
    ];

    const customCompare = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key > b.key ? 1 : -1;
    };

    expect(linearSearch(array, { key: 2 }, customCompare)).toEqual([1, 4]);
    expect(linearSearch(array, { key: 1 }, customCompare)).toEqual([0]);
    expect(linearSearch(array, { key: 7 }, customCompare)).toEqual([]);
  });
});

