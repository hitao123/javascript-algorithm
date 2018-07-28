import BinaryTreeNode from '../BinaryTreeNode';
import Comparator from '../../../utils/comparator/Comparator';

export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null, CompareFunction = undefined) {
    super(value);

    this.CompareFunction = CompareFunction;
    this.nodeValueComparator = new Comparator(CompareFunction);
  }
  /**
   * 插入
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    // console.log(value, this.value, this.nodeValueComparator.equal(value, null));
    if (this.nodeValueComparator.equal(this.value, null)) {
      this.value = value;
      return this;
    }

    if (this.nodeComparator.lessThan(value, this.value)) {
      // 插入左边
      if (this.left) {
        return this.left.insert(value);
      }

      const insertNode = new BinarySearchTreeNode(value, this.CompareFunction);
      this.setLeft(insertNode);

      return insertNode;
    }

    if (this.nodeComparator.greaterThan(value, this.value)) {
      // 插入右边
      if (this.right) {
        return this.right.insert(value);
      }

      const insertNode = new BinarySearchTreeNode(value, this.CompareFunction);
      this.setRight(insertNode);

      return insertNode;
    }

    return this;
  }
  /**
   * 是否有该值得结点
   * @param {*} value
   */
  contains(value) {
    return !!this.find(value);
  }
  /**
   * 查找树上的某个结点
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  find(value) {
    if (this.nodeComparator.equal(value, this.value)) {
      return this;
    }
    if (this.nodeComparator.lessThan(value, this.value) && this.left) {
      return this.left.find(value);
    }

    if (this.nodeComparator.greaterThan(value, this.value) && this.right) {
      return this.right.find(value);
    }
    return null;
  }
  /**
   * 移除树上某个结点
   * @param {*} value
   */
  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error('item not found in tree');
    }

    const { parent } = nodeToRemove;
    // 叶子结点
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // 删除结点有左右孩子
      const nextMinNode = nodeToRemove.right.findMin();
      if (!this.nodeComparator.equal(nextMinNode, nodeToRemove.right)) {
        this.remove(nextMinNode.value);
        nodeToRemove.setValue(nextMinNode.value);
      } else {
        // 右孩子没有结点
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setRight(nodeToRemove.right);
      }
    } else {
      // 删除结点只有一个孩子
      const childNode = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        BinaryTreeNode.copeNode(childNode, nodeToRemove);
      }
    }
    nodeToRemove.parent = null;
    return true;
  }
  /**
   * 左边孩子最小 只需要找左孩子即可
   * @return {BinarySearchTreeNode}
   */
  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }
}
