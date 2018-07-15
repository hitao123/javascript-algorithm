import MinHeap from '../MinHeap';

describe('minheap', () => {
  it('should create empty minheap', () => {
    const minheap = new MinHeap();
    expect(minheap).toBeDefined();
    expect(minheap.peek()).toBeNull();
    expect(minheap.isEmpty()).toBeTruthy();
  })

  it('should add items to the heap and heapify it up', () => {
    const minheap = new MinHeap();

    minheap.add(5);
    expect(minheap.isEmpty()).toBeFalsy();
    expect(minheap.peek()).toBe(5);
    expect(minheap.toString()).toBe('5');

    minheap.add(8);
    expect(minheap.peek()).toBe(5);
    expect(minheap.toString()).toBe('5,8');

    minheap.add(1);
    expect(minheap.peek()).toBe(1);
    expect(minheap.toString()).toBe('1,8,5');

    minheap.add(6);
    expect(minheap.peek()).toBe(1);
    expect(minheap.toString()).toBe('1,6,5,8');

    minheap.add(7);
    expect(minheap.peek()).toBe(1);
    expect(minheap.toString()).toBe('1,6,5,8,7');

    minheap.add(8);
    expect(minheap.peek()).toBe(1);
    expect(minheap.toString()).toBe('1,6,5,8,7,8');

    expect(minheap.poll()).toBe(1);
    expect(minheap.toString()).toBe('5,6,8,8,7');

    expect(minheap.poll()).toBe(5);
    expect(minheap.toString()).toBe('6,7,8,8');

  })

  it('should poll items from the heap and heapify it down', () => {
    const minheap = new MinHeap();

    minheap.add(5);
    minheap.add(3);
    minheap.add(10);
    minheap.add(11);
    minheap.add(1);

    expect(minheap.toString()).toBe('1,3,10,11,5');

    expect(minheap.poll()).toBe(1);
    expect(minheap.toString()).toBe('3,5,10,11');

    expect(minheap.poll()).toBe(3);
    expect(minheap.toString()).toBe('5,11,10');

    expect(minheap.poll()).toBe(5);
    expect(minheap.toString()).toBe('10,11');

    expect(minheap.poll()).toBe(10);
    expect(minheap.toString()).toBe('11');

    expect(minheap.poll()).toBe(11);
    expect(minheap.toString()).toBe('');

    expect(minheap.poll()).toBeNull();

  })

  it('should find item index in heap', () => {
    const minheap = new MinHeap();

    minheap.add(4);
    minheap.add(1);
    minheap.add(7);
    minheap.add(3);
    minheap.add(5);
    minheap.add(1);
    
    expect(minheap.toString()).toBe('1,3,1,4,5,7');

    expect(minheap.find(9)).toEqual([]);
    expect(minheap.find(4)).toEqual([3]);
    expect(minheap.find(1)).toEqual([0,2]);
    
  })

  it('should remove item from heap with heapify down', () => {
    const minheap = new MinHeap();

    minheap.add(4);
    minheap.add(1);
    minheap.add(7);
    minheap.add(3);
    minheap.add(5);
    minheap.add(1);
    
    expect(minheap.toString()).toBe('1,3,1,4,5,7');

    expect(minheap.remove(3).toString()).toEqual('1,4,1,7,5');
    expect(minheap.remove(3).peek()).toEqual(1);
    expect(minheap.remove(1).toString()).toEqual('4,7,5');
    expect(minheap.remove(1).peek()).toEqual(4);
  })

})
