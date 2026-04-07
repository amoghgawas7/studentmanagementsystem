const express = require("express");
const router = express.Router();
const db = require("../db");

// Add Grades
router.post("/add", (req, res) => {
    const { student_id, course_id, marks } = req.body;

    if (!student_id || !course_id || marks === undefined) {
        return res.json("All fields required");
    }

    let grade = "";
    if (marks >= 90) grade = "A";
    else if (marks >= 75) grade = "B";
    else if (marks >= 50) grade = "C";
    else grade = "F";

    db.query(
        "INSERT INTO Grades (student_id, course_id, marks, grade) VALUES (?, ?, ?, ?)",
        [student_id, course_id, marks, grade],
        (err, result) => {
            if (err) return res.json(err);
            res.json("Grades added");
        }
    );
});

module.exports = router;