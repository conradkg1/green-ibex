const queries = {
    addDept() {
        return 'INSERT INTO department (name) VALUES (?);';
    },
    addEmployee() {
        return 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);';
    },
    addRole() {
        return 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);';
    },
    checkDeptName() {
        return 'SELECT EXISTS(SELECT * FROM department WHERE name = ?) as in_db;';
    },
    checkEmployeeName() {
        return 'SELECT EXISTS(SELECT * FROM employee WHERE first_name = ? AND last_name = ?) AS in_db;';
    },
    checkRoleTitle() {
        return 'SELECT EXISTS(SELECT * FROM role WHERE title = ?) AS in_db;';
    },
    getDepts() {
        return 'SELECT * FROM department;';
    },
    getDisplayEmployees() {
        return 'SELECT e.id AS `Id`, e.first_name AS `First Name`, e.last_name AS `Last Name`, role.title AS `Job Title`, department.name AS `Department`, role.salary AS `Salary`, COALESCE(CONCAT(m.first_name, \' \', m.last_name), \'N\/A\') AS `Manager` FROM employee e JOIN role ON e.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee m ON e.manager_id = m.id ORDER BY e.id;';
    },
    getDisplayRoles() {
        return 'SELECT role.id AS `Role ID`, role.title AS `Job Title`, department.name AS `Department`, role.salary AS `Salary` FROM role JOIN department ON role.department_id = department.id';
    },
    getEmployees() {
        return 'SELECT * from employee;';
    },
    getEmployeesFullName() {
        return 'SELECT id, CONCAT(first_name, \' \', last_name) AS name FROM employee;';
    },
    getManagers() {
        return 'SELECT id, CONCAT(first_name, \' \', last_name) AS name FROM employee WHERE id IN (SELECT DISTINCT manager_id FROM employee);';
    },
    getRoles() {
        return 'SELECT * FROM role;';
    },
    getRolesTruncated() {
        return 'SELECT id, title from role;'
    },
    updateEmployeeRole() {
        return 'UPDATE '
    },
    updateRole() {
        return ' UPDATE employee SET employee.role_id=? WHERE employee.id=?';
    },
};
module.exports = queries;