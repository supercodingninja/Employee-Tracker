const { findDpt, findRole, findEmp } = require('../assets/library/cliQuestions.js');
const  query  = require('./connect.js');


module.exports = function findDpt(results) {
    return query('INSERT INTO department SET ?', results);
}

module.exports = function findRole(results) {
    return query('INSERT INTO role SET ?', results);
}

module.exports = function findEmp(results) {
    return query('INSERT INTO employee SET ?', results);
}

module.exports = function seeDpts() {
    return query('SELECT id, name AS department FROM department' );
}

module.exports = function seeRoles() {
    return query(`SELECT * FROM role `);
}

module.exports = function seeEmps() {
    return query(`SELECT * FROM employee`);
}

module.exports = function updateRole(results) {
    return query('UPDATE employee SET ? WHERE ?', [{ id: results.id }, { id: results.role_id }]);
}

findDpt();

findRole();

findEmp();

seeDpts();

seeRoles();

seeEmps();

updateRole(results);