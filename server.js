// BRINGING IN PACKAGES TO SERVER
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require('dotenv').config(); 
const db = require('./db/database');

// BRINGING IN UTILS TO SERVER
const { viewDepartments } = require('./utils/view_departments');
const { viewRoles } = require('./utils/view_roles');
const { viewEmployees } = require('./utils/view_employees');
const { addDepartment } = require('./utils/add_department');
const { addRole } = require('./utils/add_role');
const { addEmployee } = require('./utils/add_employee')

// CHECKING DB ERROR
db.connect((err) => {
    if (err) throw err;

    init();
});

// INITIAL FUNCTION TO PROMPT USER TO SELECT AN OPTION
const init = () => {
    const userPrompts = 
        {
            type: "list",
            name: "choices",
            message: "Choose an option: ",
            choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an employee role", "Exit"]
        }



// RESPONSE BASED ON USER CHOICE
inquirer.prompt(userPrompts)
    .then(res => {
        switch(res.choices) {
            case 'View all Departments':
                viewDepartments();
                break;

            case 'View all Roles':
                viewRoles();
                break;

            case 'View all Employees':
                viewEmployees();
                break;

            case 'Add a Department':
                addDepartment();
                break;

            case 'Add a Role':
                addRole();
                break; 

            case 'Add an Employee':
                addEmployee();
                break;
            
            case 'Exit':
                process.exit();
                break;
        }
    });
};

module.exports = { init };

