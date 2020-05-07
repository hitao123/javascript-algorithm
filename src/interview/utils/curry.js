/**
 * bind 方法里面保存了之前的参数
 * @param {*} func
 * @param {*} length
 */
export default function curry(func, length) {
  const funcLength = length || func.length;
  const context = this;
  // eslint-disable-next-line func-names
  return function (...args) {
    return args.length >= funcLength
      ? func.apply(context, args)
      : curry(func.bind(context, ...args), funcLength - args.length);
  };
}

// 下面这种思路更清晰
// function curry (fn) {
//   const finalLen = fn.length
//   let args = [].slice.call(this, 1)
//   return function currying () {
//     args = args.concat(Array.from(arguments))
//     const len = args.length
//     return len >= fn.length ? fn.apply(this, args) : currying
//   }
// }
