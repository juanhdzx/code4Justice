// this is step by step

// npm init
// npm install mysql
// create server.js file

const mysql = require ("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password"

});

connection.connect((error) => {
    if (error) {
        console.log('Error');
    } else {
        console.log('Connection Success');
    }
})

// in terminal run node server.js

//open up database in mysql
// run:
// ALTER USER "root"@"localhost" identified with mysql_native_password by "Password";
// FLUSH privileges; 

//^^should prevent errors if it comes up in terminal, go back in vsCode terminal and rerun node server.js
// "connection success" - should come up
// if so, database is hooked up with node 

// now you can write queries
// keep server running so any updates you made can update the server 

// 