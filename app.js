"use strict";

const { prompt } = require("inquirer");

// const { insertDepartment, findDpt, insertRole, findRoles, findEmps, insertEmployee, getDepartments, getRoles, updateEmployeeRole } = require('./assets/library/cliQuestions');
const connection = require("./config/connect");
const util = require("util");
const { printTable } = require("console-table-printer");

// Ref. https://stackoverflow.com/questions/54730641/node-js-how-to-apply-util-promisify-to-mysql-pool-in-its-simplest-way //
let query = util.promisify(connection.query).bind(connection);
function init() {
  prompt({
    type: "list",
    name: "Task",
    message: "Please choose a task.",
    choices: [
      "Add an employee.",
      "View all employees.",
      "Delete an employee (use for termination).",
      "Delete an employee (use for employee seperation).",
      "View all roles.",
      "Delete an employee (use for employee changed companies).",
      "Add a role.",
      `Change an employee's role.`,
      `Change an employee's department.`,
      `Change an employee's manager.`,
      "Add a manager.",
      "View roles (displays employees by their roles).",
      "View management teams (displays manager(s), and their team of employees).",
      "Remove a manager.",
      "Add a department.",
      "View all departments.",
      "Remove a department (department obsolete/terminated).",
      "Remove a role (role obsolete/terminated).",
      "Update an employee's role.",
      "Quit Application.",
    ],
  }).then((res) => {
    switch (res.Task) {
      case "Add a department.":
        addDpt();
        break;

      case "Add a role.":
        addRole();
        break;

      case "Add an employee.":
        addEmp();
        break;

      case "View all departments.":
        viewDpts();
        break;

      case "View all roles.":
        viewRoles();
        break;

      case "View all employees.":
        viewEmps();
        break;

      case `Update an employee's role.`:
        updateRole();
        break;

      default:
        end();
    }
  });
}

async function viewEmps() {
  const results = await query("SELECT * FROM employee");
  printTable(results);
  init();
}

async function viewDpts() {
  const results = await query("SELECT * FROM department");
  printTable(results);
  init();
}

async function viewRoles() {
  const results = await query("SELECT * FROM role");
  printTable(results);
  init();
}

function addDpt() {
  prompt({
    message: "Please select a department.",
    type: "input",
    name: "name",
  }).then(async (results) => {
    console.log(
      "Yourselection is added.",
      "INSERT into department_name  set ?",
      { name: results.name }
    );
    await query("INSERT into department  set ?", {
      department_name: results.name,
    });

    init();
  });
}

// Add roles
async function addRole() {
  // findDpt()

  //     .then((departments) => {

  const departments = await query("SELECT * FROM department");

  const departmentChoices = departments.map((department) => ({
    value: department.id,
    name: department.department_name,
  }));

  prompt([
    {
      message: `What is the role?`,
      type: "input",
      name: "title",
    },
    {
      message: `What is the role's salary?`,
      type: "input",
      name: "salary",
      validate: (salary) => {
        if (isNaN(salary) === false) {
          return true;
        }
        return false;
      },
    },
    {
      message: "What department is this role for?",
      type: "list",
      name: "department_id",
      choices: departmentChoices,
    },
  ]).then(async (results) => {
    const newRole = {
      title: results.title,
      salary: results.salary,
      department_ID: results.department_id,
    };
    await query("INSERT INTO role set ?", newRole);
    console.log("The role has been added.");
    init();
  });
}

async function addEmp() {

    const roles = await query("SELECT * FROM role")
  const roleChoices = roles.map((role) => ({
    value: role.id,
    name: role.title,
  }));

  const managers = await query ("SELECT * FROM employee")
  const managerChoices = managers.map((manager) => ({
    value: manager.id,
    name: manager.first_name + " " + manager.last_name,
  }));

  prompt([
    {
      message: `What is the employee's first name?`,
      type: "input",
      name: "first_name",
    },
    {
      message: `What is the employee's last name?`,
      type: "input",
      name: "last_name",
    },
    {
      message: `What is the employee's role?`,
      type: "list",
      name: "role_id",
      choices: roleChoices,
    },
    {
      message: `Who is the employee's manager?`,
      type: "list",
      name: "manager_id",
      choices: managerChoices,
    },
  ]).then(async (results) => {
    const newEmployee = {
      first_name: results.first_name,
      last_name: results.last_name,
      role_id: results.role_id,
      manager_id: results.manager_id,
    };
    await query ('INSERT INTO EMPLOYEE SET ?', newEmployee)
    console.log("The new employee has been added.");
    init();
  });
}

// View all departments
function viewDepartments() {
  getDepartments().then((departments) => {
    console.table(departments);
    init();
  });
}

function viewEmployees() {
  findEmps().then((employees) => {
    console.table(employees);
    init();
  });
}

async function updateRole() {

    const roles = await query ('SELECT * FROM role')
   
    const roleChoices = roles.map((role) => ({
      value: role.id,
      name: role.title,
    }));

    const employees = await query ('SELECT * FROM employee')
 
      const employeeChoices = employees.map((employee) => ({
        value: employee.id,
        name: employee.first_name + " " + employee.last_name,
      }));

      prompt([
        {
          message: "Which employee do you want to update?",
          type: "list",
          name: "id",
          choices: employeeChoices,
        },
        {
          message: `What is the employee's new role?`,
          type: "list",
          name: "role_id",
          choices: roleChoices,
        },
      ]).then(async (results) => {
        await query ('UPDATE employee SET ? WHERE ?', [{role_id: results.role_id}, {id: results.id}] )
        console.log("Role updated.");
        init();
      });
  
  
}

init();
