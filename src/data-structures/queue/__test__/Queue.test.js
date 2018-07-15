import Queue from '../Queue';

describe('Queue', () => {
  it('Queue enqueue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(2);
    expect(queue.toString()).toBe('2');

    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.toString()).toBe('2,4,5');
  });

  it('Queue dequeue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();

    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    queue.dequeue();
    expect(queue.toString()).toBe('5,6');
  });

  it('Queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(2);
    expect(queue.isEmpty()).toBeFalsy();
  });

  it('Queue peek', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeNull();

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.peek()).toBe(3);
    expect(queue.peek()).toBe(3);
  });

  it('Queue should FIFO', () => {
    const queue = new Queue();

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    queue.dequeue();
    expect(queue.peek()).toBe(4);

    queue.dequeue();
    expect(queue.peek()).toBe(5);
  });
});
