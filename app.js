const inquirer = require('inquirer');
const connect = require('./config/connect.js');
const myDB = require('./db');
const printTable = require('console.table');
const mysql = require('mysql');

function init() {

    inquirer
        .prompt({
            type: 'list',
            name: 'Task',
            message: 'Please choose a task.',
            choices: [
                'Add an employee.',
                'View all employees.',
                'Delete an employee (use for termination).',
                'Delete an employee (use for employee seperation).',
                'Delete an employee (use for employee changed companies).',
                'Add a role to an employee.',
                `Change an employee's role.`,
                `Change an employee's department.`,
                `Change an employee's manager.`,
                'Add a manager.',
                'View roles (displays employees by their roles).',
                'View management teams (displays manager(s), and their team of employees).',
                'Remove a manager.',
                'Add a department.',
                'View departments.',
                'Remove a department (department obsolete/terminated).',
                'Remove a role (role obsolete/terminated).',
                'Quit Application.'
            ]
        })
        
        .then((res) => {

            switch(res.action) {

                case 'Add a department.':
                    addDpt();
                    break;

                case 'Add a role.':
                    addRole();
                    break;

                case 'Add an employee.':
                    addEmp();
                    break;

                case 'View all departments.':
                    viewDpts();
                    break;
        
                case 'View all roles.':
                    viewRoles();
                    break;

                case 'View all employees.':
                    viewEmps();
                    break;

                case `Update an employee's role.`:
                    updateRole()
                    break;

                default:
                    connection.end();
            }
        });
};




init();