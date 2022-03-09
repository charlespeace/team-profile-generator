const Employee = require('../lib/Employee.js')
test('creates a new employee object', () => {
    const employee = new Employee();
  
    expect(employee.name).toBe(null);
  });