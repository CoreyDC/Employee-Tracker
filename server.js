// BRINGING IN DEPENDENCIES TO SERVER
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require('dotenv').config(); 
const database = require('./db/database');

// CALLING FUNCTION TO INITIALIZE PROGRAM
init();

// INITIAL FUNCTION TO PROMPT USER TO SELECT AN OPTION
function init() {
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
                console.log('yaaaaay');
                break;
        }
    });
};
