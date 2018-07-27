import Comparator from '../../utils/comparator/Comparator';
import HashTable from '../hash-table/HashTable';

export default class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
    // 存储一些和结点相关的元信息
    this.meta = new HashTable();
    this.nodeComparator = new Comparator();
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }
  /**
   * 设置结点的值
   * @param {*} value
   */
  setValue(value) {
    this.value = value;
    return this;
  }
  /**
   * 设置左孩子
   * @param {BinaryTreeNode} node
   */
  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }
  /**
   * 设置右孩子
   * @param {BinaryTreeNode} node
   */
  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }
  /**
   * 移除结点
   * @param {BinaryTreeNode} nodeToRemove
   * @return bool
   */
  removeChild(nodeToRemove) {
    if (this.left && this.left.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }

    if (this.right && this.right.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }

    return false;
  }
  /**
   * 替换孩子结点
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return bool
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (this.left && this.left.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }
  /**
   * 先序遍历结点
   * @return Array
   */
  traverseInOrder() {
    let traverse = [];
    // 左遍历
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }
    // 添加根结点
    traverse.push(this.value);
    // 右遍历
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}
