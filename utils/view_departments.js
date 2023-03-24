// BRINGING IN DB
const db = require('../db/database');
const { init } = require('../utils/index');

// FUNCTION TO VIEW DEPARTMENTS
const viewDepartments = () => {
    console.log(`Showing all departments...
    
    `);

    db.query(`SELECT * FROM department`, (err, res) => {
        if (err) throw error;
        console.table(res);
    })
};

module.exports = { viewDepartments };