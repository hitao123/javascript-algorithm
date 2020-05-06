/**
 * 节流函数
 * @param {*} func
 * @param {*} delay
 */
const throttle = (func, delay) => {
  const context = this;
  const args = arguments;

  let current = null;
  const timer = null;

  return () => {
    const now = +Date.now();

    if (current || now - current > delay) {
      if (timer) {
        clearTimeout(timer);
      }

      setTimeout(() => {
        func.apply(context, args);
        current = now;
      }, delay);
    } else {
      current = now;
      func.apply(context, args);
    }
  };
};

export default throttle;
