import Comparator from '../../utils/comparator/Comparator';

export default class MinHeap {
  constructor(comparatorFunction) {
    // 数组展示小根堆
    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }
  /**
   * 获取左孩子索引编号
   * @param {*} parentIndex 
   */
  getLeftChildIndex(parentIndex) {
    return (parentIndex * 2) + 1;
  }
  /**
   * 获取右孩子索引编号
   * @param {*} parentIndex 
   */
  getRightChildIndex(parentIndex) {
    return (parentIndex * 2) + 2;
  }
  /**
   * 获取父亲结点的索引编号
   * @param {*} childIndex 
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  /**
   * 是否有左结点
   * @param {*} parentIndex
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }
  /**
   * 是否有右结点
   * @param {*} parentIndex
   */
  hasRightChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }
  /**
   * 有父结点
   * @param {*} childIndex 
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
  /**
   * 获取左孩子的值
   * @param {*} parentIndex 
   */
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }
  /**
   * 获取右孩子的值
   * @param {*} parentIndex 
   */
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }
  /**
   * 获取父亲结点的值
   * @param {*} childIndex 
   */
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }
  /**
   * 交换两个值
   * @param {*} indexOne 
   * @param {*} indexTwo 
   */
  swap(indexOne, indexTwo) {
    const temp = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = temp;
  }
  /**
   * 当父节点的键值总是小于或等于任何一个子节点的键值时为最小堆
   * 建立小根堆 从后往前
   * @param {*} customStartIndex 
   */
  heapifyUp(customStartIndex) {
    let currentIndex =  customStartIndex || this.heapContainer.length - 1;
    // console.log(this.heapContainer[currentIndex],this.parent(currentIndex),this.compare.lessThan(this.heapContainer[currentIndex], this.parent(currentIndex)));
    while (this.hasParent(currentIndex) && this.compare.lessThan(this.heapContainer[currentIndex], this.parent(currentIndex))) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  /**
   * 当父节点的键值总是小于或等于任何一个子节点的键值时为最小堆
   * 建立小根堆 从前向后
   * @param {*} customStartIndex 
   */
  heapifyDown(customStartIndex) {
    let currentIndex = customStartIndex || 0;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      // 看左右孩子那个大
      if (this.hasRightChild(currentIndex) && this.compare.lessThan(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }
      // 比最小的都小退出循环
      if (this.compare.lessThan(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }
  /**
   * 添加元素
   * @param {*} item 
   */
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }
  /**
   * 查看最顶部元素值
   */
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }
  /**
   * 删除堆最后一个元素, 并建立根堆
   */
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }
    const item = this.heapContainer[0];
    
    // 移动最后一个元素到首位
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    
    return item;
  }
  /**
   * 查找堆里面出现给定值的索引
   * @param {*} item 
   * @param {*} customComparator 
   */
  find(item, customComparator) {
    const findItemIndices = [];
    const comparator = customComparator || this.compare;

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex++) {
      if (comparator.equal(item, this.heapContainer[itemIndex])) {
        findItemIndices.push(itemIndex);
      }
    }
    return findItemIndices;
  }
  /**
   * 
   * @param {*} item 
   * @param {*} customFindingComparator 
   */
  remove(item, customFindingComparator) {
    const itemToRemoveLength = this.find(item, customFindingComparator).length;
    const comparator = customFindingComparator || this.compare;

    for (let iterate = 0; iterate < itemToRemoveLength; iterate++) {
      const indexToRemove = this.find(item, comparator).pop();
      // 如果是堆的最后一个元素直接删除
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        // 将堆最后元素移动到删除位置
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        const parentItem = this.hasParent(indexToRemove) ? this.parent(indexToRemove) : null;
        const leftChild = this.hasLeftChild(indexToRemove) ? this.hasLeftChild(indexToRemove) : null;
        
        if (leftChild && (parentItem === null || this.compare.lessThan(parentItem, this.heapContainer[indexToRemove]))) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  }
  /**
   * 
   */
  isEmpty() {
    return this.heapContainer.length === 0;
  }

  toString() {
    return this.heapContainer.toString();
  }

}
