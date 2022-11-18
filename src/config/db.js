import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: 'localhost',
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PWD,
	database: 'vehicledb',
});

connection.connect((err) => {
	if (err) throw err;
	console.log('Connected to database...');
});

export default connection;
