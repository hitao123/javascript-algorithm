import throttle from '../throttle';

jest.useFakeTimers();

describe('utils ==> throttle 🏀', () => {
  function testFunc(str) {
    return str;
  }

  it('should throttle correct', () => {
    const testThrottle = throttle(testFunc, 1000);
    testThrottle('hi');
    // 判断 setTimeout 方法被调用了一次
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // 判断最后一次调用 setTimeout 给它传了什么参数。这里是第一个参数是一个函数，第二个参数是 1000
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
