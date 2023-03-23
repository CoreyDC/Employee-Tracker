// BRINGING IN DB
const db = require('../db/database');

// FUNCTION TO VIEW EMPLOYEES
const viewEmployees = () => {
    console.log(`Showing all Employees...
    
    `);
    
    db.query(`SELECT * FROM employee`, (err, res) => {
        if (err) throw error;
        console.table(res);
    })
};

module.exports = { viewEmployees };