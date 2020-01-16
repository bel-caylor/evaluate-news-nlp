const sum = require('../src/client/js/formHandler.js');

test('testValidURL', () => {
  expect(testValidURL('test')).toBe(false);
  expect(testValidURL('http://www.etsy.com')).toBe(true);
});
