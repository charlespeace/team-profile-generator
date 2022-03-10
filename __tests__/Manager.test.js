const Manager = require('../lib/Manager.js')

test('getRole() returns manager', () => {
  const ex = 'Manager'
  const employee = new Manager('Tammy', 1, 'tammy1@work.com', 2)
  expect(employee.getRole()).toBe(ex)
})

test('getOfficeNumber() returns manager office number', () => {
  const input = 2
  const employee = new Manager('Tammy', 1, 'tammy1@work.com', 2)
  expect(employee.getOfficeNumber()).toBe(input)
})