import BinarySearchTreeNode from '../BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
  it('should create Binary Search Tree', () => {
    const bstNode = new BinarySearchTreeNode(2);

    expect(bstNode.value).toBe(2);
    expect(bstNode.left).toBeNull();
    expect(bstNode.right).toBeNull();
  });

  it('should insert itself if is empty', () => {
    const bstNode = new BinarySearchTreeNode();

    expect(bstNode.value).toBeNull();
    expect(bstNode.left).toBeNull();
    expect(bstNode.right).toBeNull();

    bstNode.insert(4);
    expect(bstNode.value).toBe(4);
  });

  it('should insert value in correct order', () => {
    const bstNode = new BinarySearchTreeNode(15);

    const insertNode1 = bstNode.insert(4);
    expect(insertNode1.value).toBe(4);
    expect(bstNode.traverseInOrder()).toEqual([4, 15]);

    const insertNode2 = bstNode.insert(16);
    expect(insertNode2.value).toBe(16);
    expect(bstNode.traverseInOrder()).toEqual([4, 15, 16]);

    bstNode.insert(60);
    expect(bstNode.traverseInOrder()).toEqual([4, 15, 16, 60]);
    bstNode.insert(13);
    expect(bstNode.traverseInOrder()).toEqual([4, 13, 15, 16, 60]);
    bstNode.insert(70);
    expect(bstNode.traverseInOrder()).toEqual([4, 13, 15, 16, 60, 70]);
    bstNode.insert(2);
    expect(bstNode.traverseInOrder()).toEqual([2, 4, 13, 15, 16, 60, 70]);
    bstNode.insert(12);
    expect(bstNode.traverseInOrder()).toEqual([2, 4, 12, 13, 15, 16, 60, 70]);

    expect(bstNode.contains(8)).toBeFalsy();
    expect(bstNode.contains(70)).toBeTruthy();
  });

  it('should insert duplicate values', () => {
    const bstNode = new BinarySearchTreeNode(15);

    bstNode.insert(4);
    bstNode.insert(4);
    expect(bstNode.traverseInOrder()).toEqual([4, 15]);
    expect(bstNode.contains(70)).toBeFalsy();
    expect(bstNode.contains(4)).toBeTruthy();
  });

  it('should find min node', () => {
    const bstNode = new BinarySearchTreeNode(15);

    bstNode.insert(4);
    bstNode.insert(8);
    bstNode.insert(12);

    expect(bstNode.findMin().value).toBe(4);
  });

  it('should attach possible meta info to binary tree', () => {
    const bstNode = new BinarySearchTreeNode(15);

    bstNode.insert(4);
    const insertNode1 = bstNode.insert(1);
    const insertNode2 = bstNode.insert(12);

    bstNode.meta.set('color', 'black');
    insertNode1.meta.set('color', 'red');
    insertNode2.meta.set('color', 'white');

    expect(bstNode.meta.get('color')).toBe('black');
    expect(bstNode.findMin().meta.get('color')).toBe('red');
    expect(bstNode.find(12).meta.get('color')).toBe('white');
  });

  it('should find node', () => {
    const bstNode = new BinarySearchTreeNode(15);

    bstNode.insert(4);
    bstNode.insert(30);
    bstNode.insert(40);
    bstNode.insert(300);

    expect(bstNode.find(300).value).toBe(300);
    expect(bstNode.find(500)).toBeNull();
  });

  it('should remove leaf nodes', () => {
    const bstNode = new BinarySearchTreeNode(15);

    bstNode.insert(4);
    bstNode.insert(30);

    expect(bstNode.toString()).toBe('4,15,30');

    const removeNode1 = bstNode.remove(4);
    expect(removeNode1).toBeTruthy();
    expect(bstNode.toString()).toBe('15,30');

    const removeNode2 = bstNode.remove(30);
    expect(removeNode2).toBeTruthy();
    expect(bstNode.toString()).toBe('15');
  });

  it('should remove node with one child', () => {
    const bstNode = new BinarySearchTreeNode(15);

    bstNode.insert(4);
    bstNode.insert(30);
    bstNode.insert(40);

    expect(bstNode.toString()).toBe('4,15,30,40');

    const removeNode1 = bstNode.remove(30);
    expect(removeNode1).toBeTruthy();
    expect(bstNode.toString()).toBe('4,15,40');
  });

  it('should remove node with two child', () => {
    const bstNode = new BinarySearchTreeNode(15);

    bstNode.insert(4);
    bstNode.insert(30);
    bstNode.insert(40);
    bstNode.insert(35);
    expect(bstNode.toString()).toBe('4,15,30,35,40');

    const removeNode1 = bstNode.remove(30);
    expect(removeNode1).toBeTruthy();
    expect(bstNode.toString()).toBe('4,15,35,40');
  });

  it('should remove node without parent', () => {
    const bstNode = new BinarySearchTreeNode(15);

    expect(bstNode.toString()).toBe('15');
    bstNode.remove(15);
    expect(bstNode.toString()).toBe('');
  });
});
