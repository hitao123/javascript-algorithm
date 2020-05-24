import compileTemplate from '../index';

describe('compileTemplate  🍜', () => {
  it('{{ }} 表达式', () => {
    const output = compileTemplate('<b>{{ name }}</b>', { name: 'tom' });
    expect(output).toBe('<b>tom</b>');
  });

  // it('{% if() { %} 表达式', () => {
  //   const output = compileTemplate('<b>{{ name }}</b>', { name: 'tom' });
  //   expect(output).toBe('<b>tom</b>');
  // });

  // it('{% arr.forEach() %} 表达式', () => {
  //   const output = compileTemplate('<b>{{ name }}</b>', { name: 'tom' });
  //   expect(output).toBe('<b>tom</b>');
  // });
});
