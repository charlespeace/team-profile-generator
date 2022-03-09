const Engineer = require('../lib/Engineer.js')

test('getRole() returns engineer', () => {
  const input = 'Engineer'
  const employee = new Engineer()
  expect(employee.getRole).toBe(input)
})

test('getGithub() returns github username', () => {
  const input = 'github'
  const employee = new Engineer()
  expect(employee.getGithub()).toBe(input)
})