import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkList {
  constructor(comparatorFunction) {
    this.tail = null;
    this.head = null;
    this.compare = new Comparator(comparatorFunction);
  }
  /**
   * 链表添加一个元素
   * @param {*} value
   */
  append(value) {
    const newNode = new LinkedListNode(value);
    // 如果没有头指针
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    // 添加新节点到链表中
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  /**
   *
   * @param {*} value
   */
  prepend(value) {
    this.head = new LinkedListNode(value, this.head);
    return this;
  }
  /**
   * 删除链表的一个元素
   * @param {*} value
   */
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deleteNode = null;
    // 删除为头结点，需要将头结点指向下一个结点
    if (this.compare.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
    //
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // 删除尾结点
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deleteNode;
  }
  /**
   *
   */
  deleteTail() {
    if (this.head === this.tail) {
      const deleteNode = this.tail;
      this.head = null;
      this.tail = null;
      return deleteNode;
    }
    const deleteNode = this.tail;
    let currentNode = this.head;
    // 从前往后找
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deleteNode;
  }
  /**
   *
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deleteNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deleteNode;
  }
  /**
   * 在链表里面找到某个值
   * @param {*} value
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      // 如果回调函数不为空
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // 如果值被特指
      if (value !== undefined && this.compare.equal(value, currentNode.value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  /**
   *
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
  /**
   *
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}
