const myDB = require ('./config/orm.js'); // I NEED TO CHECK THIS THOUGHT, AND ROUTE. //

// Declarations by functions. //
// Employee. //
const employee = () => {
    return {
        name:'Employee',
        type: 'list',
        message: 'Select an employee.',
        choices: () => findEmployee ()
    }
};

// List of Roles. //
const findRole = async() =>{
    
    var role = await db.seekTables('Roles');
    
    return role.map(({role_id, title}) => {
       
        return {
           value: role_id,
           name: title,
       }
    })
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
const findManager = () => {
    return {
        name:'management',
        type: 'list',
        message: `Who is the employee's manager`,
        choices: () => findEmployee ()
    }
}

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
            
            findManager()
        ]
    },
};