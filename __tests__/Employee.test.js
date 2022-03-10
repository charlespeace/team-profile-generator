const Employee = require('../lib/Employee.js')

test('getRole() returns employee', () => {
  const input = 'Employee'
  const employee = new Employee('Tony', 6, 'tony6@work.com')
  expect(employee.getRole()).toBe(input)
})

test('getId() returns employee id', () => {
  const input = 6
  const employee = new Employee('Tony', 6, 'ton6@work.com')
  expect(employee.getId()).toBe(input)
})