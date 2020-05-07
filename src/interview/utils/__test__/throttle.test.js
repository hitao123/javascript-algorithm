import throttle from '../throttle';

jest.useFakeTimers();

describe('utils ==> throttle 🍜', () => {
  it('should debounce call only twice', () => {
    const testFunc = jest.fn();

    const testThrottle = throttle(testFunc, 1000);
    testThrottle();
    testThrottle();
    testThrottle();
    testThrottle();
    testThrottle();
    testThrottle();
    jest.runAllTimers();
    // 判断 setTimeout 方法被调用次数
    expect(testFunc).toHaveBeenCalledTimes(2);
  });

  it('should debounce called fifth', () => {
    const testFunc = jest.fn();

    const testThrottle = throttle(testFunc, 1000);

    setTimeout(testThrottle, 1001);
    setTimeout(testThrottle, 1002);
    setTimeout(testThrottle, 1003);
    setTimeout(testThrottle, 1004);
    setTimeout(testThrottle, 1005);
    jest.runAllTimers();
    // 判断 setTimeout 方法被调用次数
    expect(testFunc).toHaveBeenCalledTimes(5);
  });

  it('should debounce called twice', () => {
    const testFunc = jest.fn();

    const testThrottle = throttle(testFunc, 1000);

    setTimeout(testThrottle, 500);
    setTimeout(testThrottle, 500);
    setTimeout(testThrottle, 500);
    setTimeout(testThrottle, 500);
    setTimeout(testThrottle, 500);
    jest.runAllTimers();
    // 判断 setTimeout 方法被调用次数
    expect(testFunc).toHaveBeenCalledTimes(2);
  });
});
