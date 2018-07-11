import LinkedList from '../LinkedList'

describe('LinkedList', () => {
  it('should create empty LinkedList', () => {
    const list = new LinkedList();
  })

  it('should append node to link list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
  })

  it('should prepend node to link list', () => {
    const linkedList = new LinkedList();
    
    linkedList.append(1);
    linkedList.prepend(2);
    expect(linkedList.toString()).toBe('2,1');
  })

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
  
  })

  it('should find node by value', () => {
    const linkedList = new LinkedList();
    expect(linkedList.find({ value: 1})).toBeNull();

    linkedList.append(1);
    expect(linkedList.find({ value: 1 })).toBeDefined();

    linkedList
      .append(2)
      .append(3)
    
    const node = linkedList.find({ value: 2 });
    expect(node.value).toBe(2);
  })
})
