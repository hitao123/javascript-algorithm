import timeEscape from '../timeEscape';

describe('utils timeEscape 🍜', () => {
  it('timeEscape should be correct', () => {
    const lastMinute = new Date();
    expect(() => timeEscape(null)).toThrow(TypeError);
    expect(() => timeEscape('test')).toThrow(TypeError);
    expect(() => timeEscape()).toThrow(TypeError);

    expect(timeEscape(lastMinute.getTime() - 10000)).toBe('1min 内');
    expect(timeEscape(lastMinute.getTime() - (1000 * 60 * 5))).toBe('5 分钟前');
    expect(timeEscape(lastMinute.getTime() - (1000 * 3600 * 5))).toBe('5 小时前');

    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - 2);
    expect(timeEscape(daysAgo.getTime())).toBe('2 天前');

    // const daysAgoWeek = new Date();
    // daysAgoWeek.setDate(daysAgoWeek.getDate() - 10);
    // expect(timeEscape(daysAgoWeek.getTime())).toBe('2020-4-27 15:40:54');
  });
});
