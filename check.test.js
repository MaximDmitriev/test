
const check = require('./check');

test('Проверка переменной num', () => {
  expect(check()).toEqual(5);
});
