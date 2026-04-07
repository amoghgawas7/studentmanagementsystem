const express = require("express");
const router = express.Router();
const db = require("../db");

// Mark Attendance
router.post("/mark", (req, res) => {
    const { student_id, course_id, date, status } = req.body;

    if (!student_id || !course_id || !date || !status) {
        return res.json("All fields required");
    }

    db.query(
        "INSERT INTO Attendance (student_id, course_id, date, status) VALUES (?, ?, ?, ?)",
        [student_id, course_id, date, status],
        (err, result) => {
            if (err) return res.json(err);
            res.json("Attendance added");
        }
    );
});

module.exports = router;