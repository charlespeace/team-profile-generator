const Intern = require('../lib/Intern.js')

test('getRole() returns intern', () => {
  const input = 'Intern'
  const employee = new Intern('Bill', 9, 'bill9@work.com', 'UC Davis')
  expect(employee.getRole()).toBe(input)
})

test('getSchool() returns school', () => {
  const input = 'UC Davis'
  const employee = new Intern('Bill', 9, 'bill9@work.com', 'UC Davis')
  expect(employee.getSchool()).toBe(input)
})