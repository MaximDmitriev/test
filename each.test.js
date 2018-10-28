
const func = require('./each');

test('Проверка each', () => {
  expect(func()).toEqual([8, 7, 6, 5, 4]),
  expect(func().length).toEqual(5);
});