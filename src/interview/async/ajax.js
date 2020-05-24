/**
 * 序列化参数
 */
function serializerData(params) {
  const arr = [];
  if (typeof params !== 'object') {
    throw new TypeError('params must be an object');
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(key)) {
      arr.push(`${key}=${params[key]}`);
    }
  }

  return arr.join('&');
}

/**
 * Ajax 方法实现 这里没有实现表单请求
 * @param {*} method
 * @param {*} url
 * @param {*} params
 */

const Ajax = (method = 'GET', url, params) => {
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open(method.toUpperCase(), url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.onerror = (err) => {
      reject(err);
    };

    if (method.toUpperCase() === 'GET') {
      xhr.send(null);
    } else {
      const data = serializerData(params);
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.send(data);
    }
  });
};

export default Ajax;
