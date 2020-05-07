/**
 * 给定一个时间戳，返回朋友圈动态的时间显示
 * 如 1min内 5小时前 2天前 2020年5月7日
 */
const timeEscape = (timeStamp) => {
  if (typeof timeStamp !== 'number') {
    throw new TypeError('timeStamp must be a number');
  }

  const now = new Date();
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const currentTimeStamp = now.getTime();

  const distance = currentTimeStamp - timeStamp;

  if (distance > 0) {
    if (distance <= minute) {
      return '1min 内';
    }

    if (distance <= hour) {
      const m = Math.floor(distance / minute);
      return `${m} 分钟前`;
    }

    if (distance <= day) {
      const h = Math.floor(distance / hour);
      return `${h} 小时前`;
    }

    if (distance <= week) {
      const d = Math.floor(distance / day);
      return `${d} 天前`;
    }

    return new Date(timeStamp).toLocaleString();
  }

  return 'error';
};

export default timeEscape;
