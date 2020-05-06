/**
 * 防抖函数 场景 resize input search
 * 一段时间内只执行一次
 * @param {*} func
 * @param {*} delay
 */
const debounce = (func, delay = 300) => {
  const context = this;
  const args = arguments;

  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

export default debounce;
