import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });
  it('should create list node with object value', () => {
    const obj = {
      name: 'bob',
      age: 23
    }
    const node = new LinkedListNode(obj);
    expect(node.value.name).toBe('bob');
    expect(node.value.age).toBe(23);
    expect(node.next).toBeNull();
  });
  it('should link together', () => {
    const node2 = new LinkedListNode(1);
    const node1 = new LinkedListNode(2, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(2);
    expect(node1.next.value).toBe(1);

  })
});
