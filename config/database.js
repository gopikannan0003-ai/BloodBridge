const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gopikannan2409",
    database: "bloodbridge"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed!");
        console.log("Error:", err.message);
        return;
    }

    console.log("MySQL database connected successfully.");
});

module.exports = db;
