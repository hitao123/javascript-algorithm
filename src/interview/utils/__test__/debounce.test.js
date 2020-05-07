import debounce from '../debounce';

jest.useFakeTimers();

describe('utils ==> debounce 🍜', () => {
  it('debounce should only called once', () => {
    const testFunc = jest.fn();
    const testDbounce = debounce(testFunc, 1000);
    testDbounce();
    testDbounce();
    testDbounce();
    testDbounce();
    setTimeout(testDbounce, 100);
    jest.runAllTimers();
    // 判断 setTimeout 方法被调用次数
    expect(testFunc).toHaveBeenCalledTimes(1);
  });

  it('debounce should called twice', () => {
    const testFunc = jest.fn();
    const testDbounce = debounce(testFunc, 1000);
    setTimeout(testDbounce, 1001);
    setTimeout(testDbounce, 999);
    jest.runAllTimers();
    // 判断 setTimeout 方法被调用次数
    expect(testFunc).toHaveBeenCalledTimes(2);
  });
});
