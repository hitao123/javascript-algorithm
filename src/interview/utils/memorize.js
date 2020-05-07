/**
 * 缓存函数执行的返回值 一般是在优化场景使用
 * memoize 本身就是记忆的意思
 * @param {*} func
 */
export default function memoize(func) {
  const cache = {};

  // eslint-disable-next-line func-names
  return function (...args) {
    const key = Array.prototype.join.call(args, ',');

    if (key in cache) {
      return cache[key];
    }

    cache[key] = func.apply(this, args);
    return cache[key];
  };
}
