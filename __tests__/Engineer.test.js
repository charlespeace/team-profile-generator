const Engineer = require('../lib/Engineer.js')

test('getRole() returns engineer', () => {
  const input = 'Engineer'
  const employee = new Engineer('Tom', 4, 'tom4@work.com', 'github')
  expect(employee.getRole()).toBe(input)
})

test('getGithub() returns github username', () => {
  const input = 'github'
  const employee = new Engineer('Tom', 4, 'tom4@work.com', 'github')
  expect(employee.getGithub()).toBe(input)
})