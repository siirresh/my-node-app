const greet = require('../app');

test('greet returns the correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});
