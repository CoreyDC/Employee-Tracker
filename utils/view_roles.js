// BRINGING IN DB
const db = require('../db/database');

// FUNCTION TO VIEW ROLES
const viewRoles = () => {
    console.log(`Showing all Roles...
    
    `);

    db.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
    })
};

module.exports = { viewRoles };