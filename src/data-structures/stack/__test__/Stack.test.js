import Stack from '../Stack';

describe('Stack', () => {
  it('Stack pop', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(5);

    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('Stack push', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(5);


    expect(stack.toString()).toBe('2,3,5');
  });
  it('stack isEmpty', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.linkedList).not.toBeNull();
  });
});
