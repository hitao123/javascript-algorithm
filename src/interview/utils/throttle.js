/**
 * 节流函数 每间隔 delay 执行一次
 * 鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
 * @param {*} func
 * @param {*} delay
 */
const throttle = (func, delay = 1000) => {
  const context = this;
  const args = arguments;

  let last = null;
  let timer = null;

  return () => {
    const now = +Date.now();

    if (last && now - last < delay) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        last = now;
        func.apply(context, args);
      }, delay);
    } else {
      last = now;
      func.apply(context, args);
    }
  };
};

export default throttle;
