import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.tail;
  }

  pop() {
    const removeTail = this.linkedList.deleteTail();
    return removeTail ? removeTail.value : null;
  }
  /**
   * push
   * @param {*} value
   */
  push(value) {
    this.linkedList.append(value);
  }

  peek() {
    if (!this.linkedList.tail) {
      return null;
    }
    return this.linkedList.tail.value;
  }

  toArray() {
    return this.linkedList.toArray().map(node => node.value).reverse();
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
