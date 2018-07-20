import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty LinkedList', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to link list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to link list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.prepend(2);
    expect(linkedList.toString()).toBe('2,1');
  });

  it('should delete node by value from link list', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');

    const deleteNode = linkedList.delete(3);
    expect(deleteNode.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('5');
    expect(linkedList.toString()).toBe('2,4,5');

    linkedList.delete(5);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('4');
    expect(linkedList.toString()).toBe('2,4');

    linkedList.delete(4);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');
    expect(linkedList.toString()).toBe('2');

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  it('should find node by value', () => {
    const linkedList = new LinkedList();
    expect(linkedList.find({ value: 1 })).toBeNull();

    linkedList.append(1);
    expect(linkedList.find({ value: 1 })).toBeDefined();

    linkedList
      .append(2)
      .append(3);

    const node = linkedList.find({ value: 2 });
    expect(node.value).toBe(2);
  });

  it('should delete head', () => {
    const linkedList = new LinkedList();
    expect(linkedList.deleteHead()).toBeNull();

    linkedList.append(2);
    linkedList.deleteHead();
    expect(linkedList.toString()).toBe('');

    linkedList.append(2);
    linkedList.append(3);
    linkedList.deleteHead();
    expect(linkedList.toString()).toBe('3');
  });

  it('should delete tail', () => {
    const linkedList = new LinkedList();
    expect(linkedList.deleteTail()).toBeNull();

    linkedList.append(2);
    linkedList.deleteTail();
    expect(linkedList.toString()).toBe('');

    linkedList.append(2);
    linkedList.append(6);
    linkedList.deleteTail();
    expect(linkedList.toString()).toBe('2');
  });

  it('should find node by callback', () => {
    const linkedList = new LinkedList();

    linkedList.append({ key: 'test1', value: 1 });
    linkedList.append({ key: 'test2', value: 2 });
    linkedList.append({ key: 'test3', value: 3 });

    const node = linkedList.find({ callback: value => value.key === 'test1' });
    expect(node).toBeDefined();
    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('test1');
    expect(linkedList.find({ callback: value => value.key === 'test5' })).toBeNull();
  });
});
