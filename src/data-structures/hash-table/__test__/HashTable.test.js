import HashTable from '../HashTable';

describe('HashTable', () => {
  it('should create table with certain size', () => {
    const hashTable = new HashTable();
    expect(hashTable.buckets.length).toBe(32);

    const biggerHashTable = new HashTable(54);
    expect(biggerHashTable.buckets.length).toBe(54);
  });

  it('should generate proper hash for specified keys', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('abc')).toBe(6);
  });

  it('should set get delete value', () => {
    const hashTable = new HashTable(3);

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('c')).toBe(0);
    expect(hashTable.hash('d')).toBe(1);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'cloud');
    hashTable.set('d', 'dog');

    expect(hashTable.has('x')).toBeFalsy();
    expect(hashTable.has('b')).toBeTruthy();
    expect(hashTable.has('c')).toBeTruthy();

    const stringfifier = value => `${value.key}:${value.value}`;
    expect(hashTable.buckets[0].toString(stringfifier)).toBe('c:cloud');
    expect(hashTable.buckets[1].toString(stringfifier)).toBe('a:sky,d:dog');
    expect(hashTable.buckets[2].toString(stringfifier)).toBe('b:sea');

    expect(hashTable.get('a')).toBe('sky');
    expect(hashTable.get('b')).toBe('sea');
    expect(hashTable.get('d')).toBe('dog');

    hashTable.delete('a');
    expect(hashTable.delete('not')).toBeNull();
    expect(hashTable.get('a')).not.toBeDefined();

    hashTable.set('d', 'ocean-new');
    expect(hashTable.get('d')).toBe('ocean-new');
  });
});
