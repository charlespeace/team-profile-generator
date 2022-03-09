const Employee = require('../lib/Employee.js')

test('getRole() returns employee', () => {
  const input = 'Employee'
  const employee = new Employee()
  expect(employee.getRole).toBe(input)
})

test('getId() returns employee id', () => {
  const input = 1
  const employee = new Employee()
  expect(employee.getId()).toBe(input)
})