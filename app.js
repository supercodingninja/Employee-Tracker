'use strict';

import { prompt } from 'inquirer';
import { end } from './config/connect';
import { insertDepartment, findDpt, insertRole, findRoles, findEmps, insertEmployee, getDepartments, getRoles, updateEmployeeRole } from './config/orm';

function init() {

    prompt({
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

            switch(res.Task) {

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
                    end();
            }
        });
};


function addDpt() {
    prompt(
            {
                message: 'Please select a department.',
                type: 'input',
                name: 'name'
            },
        )
        
        .then((results) => {
            insertDepartment(results);
            console.log('Yourselection is added.');
            init();
        });
};


// Add roles
function addRole() {

    findDpt()

        .then((departments) => {
            const departmentChoices = departments.map((department) => ({
                value: department.id,
                name: department.department
            }))

            prompt([
                    {
                        message: `What is the role?`,
                        type: 'input',
                        name: 'title'
                    },
                    {
                        message: `What is the role's salary?`,
                        type: 'input',
                        name: 'salary',
                        validate: (salary => {
                            if (isNaN(salary) === false) {
                                return true;
                            }
                            return false;
                        })
                    },
                    {
                        message: 'What department is this role for?',
                        type: 'list',
                        name: 'department_id',
                        choices: dptChoices  
                    }
                ])
                
                .then((results) => {
                    const newRole = {
                        title: results.title,
                        salary: results.salary,
                        department_ID: results.department_id
                    }
                    insertRole(newRole);
                    console.log('The role has been added.');
                    init();

                });

        })

};


function addEmp() {

    findRoles()
        .then((roles) => {

            const roleChoices = roles.map((role) => ({
                value: role.id,
                name: role.title,
            }));

        findEmps()
            .then((managers) => {

                const managerChoices = managers.map((manager) => ({
                    value: manager.id,
                    name: manager.first_name + ' ' + manager.last_name
                }))

        prompt([
                {
                    message: `What is the employee's first name?`,
                    type: 'input',
                    name: 'first_name'
                },
                {
                    message: `What is the employee's last name?`,
                    type: 'input',
                    name: 'last_name'
                },
                {
                    message: `What is the employee's role?`,
                    type: 'list',
                    name: 'role_id',
                    choices: roleChoices 
                },
                {
                    message: `Who is the employee's manager?`,
                    type: 'list',
                    name: 'manager_id',
                    choices: 'managerChoices' 
                }
            ])
            
            .then((results) => {
                const newEmployee = {
                    first_name: results.first_name,
                    last_name: results.last_name,
                    role_id: results.role_id,
                    manager_id: results.manager_id
                }
                insertEmployee(newEmployee);
                console.log('The new employee has been added.');
                init();
    
                });
            
            })
        
        })
};

// View all departments
function viewDepartments() {

    getDepartments()
        .then((departments) => {
            console.table(departments);
            init();
        })

};

// View all roles
function viewRoles() {

    getRoles()
        .then((roles) => {
            console.table(roles);
            init();
        })

};

function viewEmployees() {

    findEmps()
        .then((employees) => {
            console.table(employees);
            init();
        })

};


function updateRole() {

    findRoles()
        .then((roles) => {

            const roleChoices = roles.map((role) => ({
                value: role_id,
                name: title
            }));

        findEmps()
            .then((employees) => {

                const employeeChoices = employees.map((employee) => ({
                    value: id,
                    name: first_name + ' ' + last_name
                }));

        prompt([
                {
                    message: 'Which employee do you want to update?',
                    type: 'list',
                    name: 'id',
                    choices: empChoices
                },
                {
                    message: `What is the employee's new role?`,
                    type: 'list',
                    name: 'role_id',
                    choices: roleChoices 
                }
            ]).then((results) => {

                updateEmployeeRole(results);
                console.log('Role updated.')
                init();
            });
        
        });
        
    });
};

init();