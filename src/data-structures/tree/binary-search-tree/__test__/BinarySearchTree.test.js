import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary Search Tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root.value).toBeNull();
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('should insert values', () => {
    const bst = new BinarySearchTree();

    const insertNode1 = bst.insert(4);
    const insertNode2 = bst.insert(5);

    bst.insert(10);

    expect(bst.toString()).toBe('4,5,10');
    expect(insertNode1.value).toBe(4);
    expect(insertNode2.value).toBe(5);
  });
});
