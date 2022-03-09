const Intern = require('../lib/Intern.js')

test('getRole() returns intern', () => {
  const input = 'Intern'
  const employee = new Intern()
  expect(employee.getRole).toBe(input)
})

test('getSchool() returns school', () => {
  const input = 'UC Davis'
  const employee = new Intern()
  expect(employee.getSchool()).toBe(input)
})