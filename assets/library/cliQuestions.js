const myDB = require ('./config/orm.js'); // I NEED TO CHECK THIS THOUGHT, AND ROUTE. //


// Declarations by functions. //

// Department Table. //
const findDpt = async () => {
            
    var department = await db.seekTables('Departments');
    
    return department.map(({id, department_name}) => {
    
        return {
            value: id,
            name: department_name
       }
    })
};

// Roles Table //
const findRole = async () => {
    
    var role = await db.seekTables('Roles');
    
    return role.map (
        
        ({role_id, title}) => {
       
            return {
            value: role_id,
            name: title,
            }
        }
    )
};

// Employee Table. //
const findEmp = async () => {
    
    var employee = await db.getAllTables('employee')
    
    var array = employee.map(
        
        ({id, first_name, last_name}) => {

            return {
                value: id,
                name:`${first_name} ${last_name}`
            }
        }
    )

    array.push({
        value: 'null',
        name: `Employee not found.`
    })

    return array;
};

const findMgr = async () => {
    
    var mgr = await db.findMgr();
    
    // I needed another value for name property, because this is referencing the employee associated with the manager_id (see Employee Table in schema); so I chose by default, 'mgr' to avoid confusion. //
    return mgr.map(({manager_id, mgr}) => {
       
        return {
           value: manager_id,
           name: mgr
       }
    })
};

// List of Employees. //
const emp = () => {
    return {
        name:'Employee',
        type: 'list',
        message: 'Select an employee.',
        choices: () => findEmp ()
    }
};

// Employee's Role. //
const empRole = () =>{
    return {
        name: 'role_id',
        type: 'list',
        message: `What is the employee's role?`,
        choices: () => findRole ()
    }
};

// Finding the employee's manager. //
const Mgr = () => {
    
    return {
        name:'management',
        type: 'list',
        message: `Choose an employee to become a manager.`,
        choices: () => findEmp ()
    }
};

// Associating the department to the employee. //
const dpt = () => {
    return  {
        name: 'id',
        type: 'list',
        message: 'Which department does the employee fall under?',
        choices: () => findDpt ()
    }
};


module.exports = {
    // CLI Initial Query. //
    initApp () {
        return [{
            type: 'list',
            name: 'action',
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
        }]
    },

    // Employee's Name. //
    empQ () {
        return[
            {
                name: 'first_name',
                type: 'input',
                message: `What is the employee's first name?`
            },

            {
                name: 'last_name',
                type: 'input',
                message: `What is the employee's last name?`
            },
            
            {
                name: 'under_management',
                type: 'input',
                message: 'Does the employee have a/several manager(s)?',
                choices: [
                    'Yes',
                    'No',
                    'N/A'
                ]
            },

            empRole(), // Use this declaration to find the role. //
            
            Mgr()
        ]
    },

    // Role and Salary //
    roleQ () {
        return [
            {
                name: 'title',
                type: 'input',
                message: `What is the employee's role?` // Attempt to associate role with the salary. //
            },
        
            {
                name: 'salary',
                type: 'input',
                message: `What is the role's salary?`
            },
            
            dpt()
        ]
    },

    // Change employee's role. //
    roleEmpQ () {
        return [
            empRole(),
            emp()
        ]
    },

    // Places the manager onto the table. //
    renderMgr () {
        return [someMgr()]
    },

    // Change Manager. //

    // Still need to figure out delete. //
};