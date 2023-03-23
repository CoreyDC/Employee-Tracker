// BINGING IN DB, INQUIRER AND VIEW EMPLOYEES FUNCTION
const db = require('../db/database');
const inquirer = require('inquirer');
const { viewEmployees } = require('./view_employees');

// FUNCTION TO ADD A ROLE
const addEmployee = () => {
    const newEmplPrompt = [
        {
            type: 'input',
            name: 'firstName',
            message: 'New employee first name ',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'New employee last name ',
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the role id for this employee? ',
            choices: [1, 2, 3, 4, 5, 6, 7],
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Who is new employees manager? ',
            choices: [1, 2, 3, 4, 5, 6, 7, 'null']
        }
    ];

    inquirer.prompt(newEmplPrompt)
        .then(res => {
            db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${res.firstName}', '${res.lastName}', ${res.role_id}, ${res.manager})`, (err, res) => {
                if (err) throw err;
                console.table(res);
            })

            viewEmployees();
        })
}    
            

module.exports = { addEmployee };