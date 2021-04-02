import { findDpt, findRole, findEmp } from '../assets/library/cliQuestions.js';
import { query } from './connect.js';
import SQL from 'string';

export function findDpt(results) {
    return query(SQL, 'INSERT INTO department SET ?', results);
}
export function findRole(results) {
    return query(SQL, 'INSERT INTO role SET ?', results);
}
export function findEmp(results) {
    return query(SQL, 'INSERT INTO employee SET ?', results);
}
export function seeDpts() {
    return query('SELECT id, name AS department FROM department', results);
}
export function seeRoles() {
    return query(SQL, `SELECT id, title, salary, department.name`, results);
}
export function seeEmps() {
    return query(SQL, `SELECT id, first_name, last_name, title, salary,`, results);
}
export function updateRole(results) {
    return query(SQl, 'UPDATE employee SET ? WHERE ?', [{ id: results.id }, { id: results.role_id }]);
}

findDpt();

findRole();

findEmp();

seeDpts();

seeRoles();

seeEmps();

updateRole(results);