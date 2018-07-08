import LinkedListNode from './LinkedListNode';

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
    let newNode = new LinkedListNode(value);
    // 如果没有头指针
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this
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
    this.head = new LinkedListNode(value);
    return this;
  }
  /**
   * 删除链表的一个元素
   * @param {*} value 
   */
  delete(value) {
    if (!this.head) {
      return null
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
          deleteNode = currentNode;
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
    return deleteNode
  }
  /**
   * 
   */
  deleteTail() {

  }
  /**
   * 
   */
  deleteHead() {

  }
  /**
   * 在链表里面找到某个值
   * @param {*} value 
   */
  find(value) {

  }
  /**
   * 
   */
  toArray() {

  }
  /**
   * 
   */
  toString() {

  }
}
