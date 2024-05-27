const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  user: 'your_username', // Change this to your MySQL username
  password: 'your_password', // Change this to your MySQL password
  database: 'sales_db' // Change this to your desired database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Create the sales table
connection.query(`CREATE TABLE IF NOT EXISTS sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  payment_type VARCHAR(50) NOT NULL,
  payment_status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`, (err, results, fields) => {
  if (err) {
    console.error('Error creating table: ' + err.stack);
    return;
  }
  console.log('Sales table created successfully');
});

module.exports = connection;
