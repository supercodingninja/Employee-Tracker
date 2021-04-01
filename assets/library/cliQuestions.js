const orm = require ('./config/orm.js'); // I NEED TO CHECK THIS THOUGHT, AND ROUTE. //

// Declarations by functions. //
// Department Table. //
const findDpt = async () => {
            
    var department = await orm.seekTables('Departments');
    
    return department.map(({id, department_name}) => {
    
        return {
            value: id,
            name: department_name
       }
    })
};

// I THINK I NEED AN addEmp (){...};  I will check. //  

// Roles Table //
const findRole = async () => {
    
    var role = await orm.seekTables('Roles');
    
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
    
    var employee = await orm.seekTables('employee')
    
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
    
    var mgmt = await orm.findMgr();
    
    // I needed another value for name property, because this is referencing the employee associated with the manager_id (see Employee Table in schema); so I chose by default, 'mgmt' to avoid confusion. //
    return mgmt.map(({manager_id, mgr}) => {
       
        return {
           value: manager_id,
           name: mgmt
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

    getDpt () {
        return [dpt()]
    },

    getRoles () {
        return [empRole()]
    },

    // Places the manager onto the table. //
    renderMgr () {
        return [findMgr()]
    },

    // Change Manager. //
    newMgr () {
        return [
            Mgr(),
            emp()
        ]
    },

    getEmp () {
        return [emp()]
    },

    // Still need to figure out delete. //
    Delete () {
        return {
            name: 'Delete',
            type: 'confirm',
            message: 'Are you sure you want to delete selection (possible data loss with all associated with selection)?',
            choices: [
                'DELETE',
                'Take no action; and complete application.',
                'Quit application; and do not save changes.'
            ]
        }
    },
    
    initApp()
};

// I am using these CLI questions as a library of sorts; so I will need to create a function to my application.  I will do this in my app.js file. //