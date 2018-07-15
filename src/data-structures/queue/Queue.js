import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
