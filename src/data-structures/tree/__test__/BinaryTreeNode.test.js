import BinaryTreeNode from '../BinaryTreeNode';

describe('BinaryTreeNode', () => {
  it('should create Tree', () => {
    const binaryTreeNode = new BinaryTreeNode();

    expect(binaryTreeNode).toBeDefined();

    expect(binaryTreeNode.value).toBeNull();
    expect(binaryTreeNode.left).toBeNull();
    expect(binaryTreeNode.right).toBeNull();

    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.value).toBe(2);
    expect(leftNode.value).toBe(1);
    expect(rightNode.value).toBe(3);
  });

  it('should set parent', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.parent).toBeNull();
    expect(rootNode.left.parent.value).toBe(2);
    expect(rootNode.right.parent.value).toBe(2);
  });

  it('should traverse node', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);
    expect(rootNode.toString()).toBe('1,2,3');
  });

  it('shuold remove child node', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    expect(rootNode.removeChild(rootNode.left)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([2, 3]);

    expect(rootNode.removeChild(rootNode.right)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([2]);

    expect(rootNode.removeChild(rootNode.left)).toBeFalsy();
    expect(rootNode.traverseInOrder()).toEqual([2]);
  });

  it('should replace child node', () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);
    const replaceLeft = new BinaryTreeNode(8);
    const replaceRight = new BinaryTreeNode(9);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 2, 3]);

    expect(rootNode.replaceChild(rootNode.left, replaceLeft)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([8, 2, 3]);

    expect(rootNode.replaceChild(rootNode.right, replaceRight)).toBeTruthy();
    expect(rootNode.traverseInOrder()).toEqual([8, 2, 9]);
  });

  it('shuold calculate node height', () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(3);
    const right = new BinaryTreeNode(2);
    const grandLeft = new BinaryTreeNode(5);
    const grandRight = new BinaryTreeNode(6);
    const grandGrandLeft = new BinaryTreeNode(7);

    expect(root.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    root
      .setLeft(left)
      .setRight(right);

    expect(root.height).toBe(1);
    expect(root.balanceFactor).toBe(0);

    left
      .setLeft(grandLeft)
      .setRight(grandRight);

    expect(root.height).toBe(2);
    expect(root.left.height).toBe(1);
    expect(root.balanceFactor).toBe(1);

    grandLeft
      .setLeft(grandGrandLeft);

    expect(root.height).toBe(3);
    expect(root.left.left.height).toBe(1);
    expect(root.balanceFactor).toBe(2);
  });
});
