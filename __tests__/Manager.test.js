const Manager = require('../lib/Manager.js')

test('getRole() returns manager', () => {
  const ex = 'Manager'
  const employee = new Manager()
  expect(employee.getRole).toBe(ex)
})

test('getOfficeNumber() returns manager office number', () => {
  const input = 12
  const employee = new Manager()
  expect(employee.getOfficeNumber()).toBe(input)
})