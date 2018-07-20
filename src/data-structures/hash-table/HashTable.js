import LinkedList from '../linked-list/LinkedList';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {};
  }
  /**
   * 将键名转换为对应数字，保证每一值
   * @param {*} key
   */
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );
    return hash % this.buckets.length;
  }
  /**
   * 设置 key value
   * @param {*} key
   * @param {*} value
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }
  /**
   * 根据键名获取值
   * @param {*} key
   */
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    return node ? node.value.value : undefined;
  }

  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    if (node) {
      // 这里比较的是一个对象 比较的是对象的地址 { a: 1 } !== { a: 1 } 只有在同一个引用才会相等
      return bucketLinkedList.delete(node.value);
    }
    return null;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}
