// BRINGING IN DB, INQUIRER AND VIEWDEPARTMENTS FUNCTION
const db = require('../db/database');
const inquirer = require('inquirer');
const { viewDepartments } = require('./view_departments');

// FUNCTION TO ADD DEPARTMENT
const addDepartment = () => {
    const newDepPrompt = 
    {
        type: 'input',
        name: 'department_name',
        message: 'New Department Name: ',
    }

    inquirer.prompt(newDepPrompt)
        .then(res => {
            db.query(`INSERT INTO department(name) VALUES ('${res.department_name}')`, (err, res) => {
                if (err) throw err;
                console.table(res);
            });

            viewDepartments();
        })
};

module.exports = { addDepartment };