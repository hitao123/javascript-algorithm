/**
 * 模板编译引擎
 * @param {string}
 * @param {object}
 * @return {string}
 */

export default function compileTemplate(template, data) {
  let str = '';
  str = template.replace(/\{\{([^}]+)\}\}/g, (_, p1) => {
    const value = data[p1.trim()];
    return `${value}`;
  });

  return str;
}
