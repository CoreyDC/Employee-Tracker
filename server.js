// BRINGING IN DEPENDENCIES TO SERVER
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const consoleTable = require('console.table');

// PROMPT USER TO SELECT AN OPTION
function promptUser() {
    inquirer
        .prompt({
            type: "list",
            name: "choices",
            message: "Choose an option: ",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an employee role", "Exit"]
        })
    };
  