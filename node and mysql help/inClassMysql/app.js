const mysql = require('mysql');
// connection details 
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Password',  
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});
