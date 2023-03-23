// BRINGING IN DB AND INQUIRER
const db = require('../db/database');
const inquirer = require('inquirer');

// FUNCTION TO ADD DEPARTMENT
const addDepartment = () => {
    const newDepPrompt = 
    {
        message: 'New Department Name: ',
        name: 'department_name'
    }

    inquirer.prompt(newDepPrompt)
        .then(res => {
            db.query(`INSERT INTO department(name) VALUES ('${res.department_name}')`, (err, res) => {
                if (err) throw err;
                console.table(res);
            });
        })
};

module.exports = { addDepartment };