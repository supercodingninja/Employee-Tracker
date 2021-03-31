const connection = require('./connect.js');
const app = require('../app');
const {findDpt, findRole, findEmp} = require('../assets/library/cliQuestions.js');

const mysql = require('string');

module.exports = {
    
    findDpt(results) {
        return connection.query(
            'INSERT INTO department SET ?', results
        );
    },

    findRole(results) {
        return connection.query(
            'INSERT INTO role SET ?', results
        );
    },

    findEmp(results) {
        return connection.query(
            'INSERT INTO employee SET ?', results
            );
    },

    seeDpts() {
        return connection.query('SELECT id, name AS department FROM department');
    },

    seeRoles() {
        return connection.query(SQL
            `SELECT id,
            title,
            salary, department.name`);
    },

    seeEmps() {
        return connection.query(SQL
            `SELECT id, 
            first_name,
            last_name,
            title,
            salary,`);
    },

    updateRole(results) {
        return connection.query('UPDATE employee SET ? WHERE ?',
        [
            {id: results.id},
            
            {id: results.role_id}
        ])
    }
};

findDpt();

findRole();

findEmp();

seeDpts();

seeRoles();

seeEmps();

updateRole(results);

export default seekTables;