const {findDpt, findRole, findEmp} = require('../assets/library/cliQuestions.js');
const connect = require('./connect.js');
const SQL = require('string');

module.exports = {
    
    findDpt(results) {
        return connect.query(SQL, 'INSERT INTO department SET ?', results);
    },

    findRole(results) {
        return connect.query(SQL, 'INSERT INTO role SET ?', results);
    },

    findEmp(results) {
        return connect.query(SQL, 'INSERT INTO employee SET ?', results);
    },

    seeDpts() {
        return connect.query('SELECT id, name AS department FROM department', results);
    },

    seeRoles() {
        return connect.query(SQL, `SELECT id, title, salary, department.name`, results);
    },

    seeEmps() {
        return connect.query(SQL, `SELECT id, first_name, last_name, title, salary,`, results);
    },

    updateRole(results) {
        return connect.query(SQl, 'UPDATE employee SET ? WHERE ?', [{id: results.id}, {id: results.role_id}])
    }
};

findDpt();

findRole();

findEmp();

seeDpts();

seeRoles();

seeEmps();

updateRole(results);