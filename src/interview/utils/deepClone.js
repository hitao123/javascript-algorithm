/**
 * 深度克隆
 * @param {*} obj
 */
// export default function deepClone(obj) {
//   if (typeof obj !== 'object' && !Array.isArray(obj)) {
//     throw new TypeError('obj must be array or object');
//   }

//   const newObj = {};
//   const newArr = [];
//   // eslint-disable-next-line no-restricted-syntax
//   for (const key in obj) {
//     // eslint-disable-next-line no-prototype-builtins
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
//         if (typeof obj[key] === 'object') {
//           newObj[key] = deepClone(obj[key]);
//         } else {
//           for (let i = 0; i < obj[key].length; i += 1) {
//             const element = obj[key][i];
//             if (typeof obj[key][i] === 'object') {
//               newArr.push(deepClone(obj[key][i]));
//             } else {
//               newArr.push(element);
//             }
//           }
//           newObj[key] = newArr;
//         }
//       }
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

export default function deepClone(target, src) {
  if (typeof src !== 'object' && !Array.isArray(src)) {
    throw new TypeError('src must be array or object');
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key in src) {
    // eslint-disable-next-line no-prototype-builtins
    if (src.hasOwnProperty(key)) {
      if (typeof src[key] === 'object' || Array.isArray(src[key])) {
        if (typeof src[key] === 'object' && !(typeof target[key] === 'object')) {
          // eslint-disable-next-line no-param-reassign
          target[key] = {};
        }

        if (Array.isArray(src[key]) && !(Array.isArray(target[key]))) {
          // eslint-disable-next-line no-param-reassign
          target[key] = [];
        }

        deepClone(target[key], src[key]);
      } else if (src[key]) {
        // eslint-disable-next-line no-param-reassign
        target[key] = src[key];
      }
    }
  }
  return target;
}
