const mysql = require("mysql2");

let db;

try {
    db = mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "student_management"
    });

    db.connect((err) => {
        if (err) {
            console.log("❌ Database connection failed:", err.message);
        } else {
            console.log("✅ Connected to MySQL");
        }
    });

} catch (error) {
    console.log("⚠️ DB init error:", error.message);
}

module.exports = db;