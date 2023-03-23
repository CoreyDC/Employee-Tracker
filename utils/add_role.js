// BINGING IN DB, INQUIRER AND VIEWROLES FUNCTION
const db = require('../db/database');
const inquirer = require('inquirer');
const { viewRoles } = require('./view_roles');

// FUNCTION TO ADD A ROLE
const addRole = () => {
    const newRolePrompt = [
        {
            type: 'input',
            name: 'role_title',
            message: 'New Role Title: ',
        },
        {
            type: 'input',
            name: 'role_salary',
            message: 'What is salary for this role? ',
        },
        {
            type: 'list',
            name: 'dept_id',
            message: 'What is the department id for this role? ',
            choices: [1, 2, 3, 4]
        }
    ];

    inquirer.prompt(newRolePrompt)
        .then(res => {
            db.query(`INSERT INTO role(title, salary, department_id) VALUES ('${res.role_title}', ${res.role_salary}, ${res.dept_id})`, (err, res) => {
                if (err) throw err;
                console.table(res);
            })

            viewRoles();
        })
}    
            

module.exports = { addRole };