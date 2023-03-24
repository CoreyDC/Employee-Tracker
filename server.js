// BRINGING IN PACKAGES TO SERVER
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require('dotenv').config(); 
const db = require('./db/database');

// BRINGING IN INDEX TO SERVER
const { init } = require('./utils/index');

// CHECKING DB ERROR AND RUNNING INITIATE FUNCTION
db.connect((err) => {
    if (err) throw err;

    init();
});

