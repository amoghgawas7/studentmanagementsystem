const express = require("express");
const router = express.Router();
const db = require("../db");

// Add Student
router.post("/add", (req, res) => {
    const { name, email, department } = req.body;

    if (!name || !email || !department) {
        return res.json("All fields required");
    }

    db.query(
        "INSERT INTO Students (name, email, department) VALUES (?, ?, ?)",
        [name, email, department],
        (err, result) => {
            if (err) return res.json(err);
            res.json("Student added");
        }
    );
});

// Get Students
router.get("/", (req, res) => {
    db.query("SELECT * FROM Students", (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

module.exports = router;