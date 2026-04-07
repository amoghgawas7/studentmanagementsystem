const BASE_URL = "http://localhost:5000";

// Add Student
async function addStudent() {
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value
    };

    console.log("Sending Data:", data); // ✅ DEBUG

    const res = await fetch(`${BASE_URL}/students/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log("Server Response:", result); // ✅ DEBUG

    alert("Student Added!");
    getStudents();
}

// Load Students
async function getStudents() {
    const res = await fetch(`${BASE_URL}/students`);
    const students = await res.json();

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    document.getElementById("totalStudents").textContent = students.length;

    students.forEach(s => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${s.name} (${s.department})</span>
            <div class="actions">
                <button onclick="deleteStudent(${s.student_id})">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}

// Attendance
async function markAttendance() {
    const data = {
        student_id: student_id.value,
        course_id: course_id.value,
        date: date.value,
        status: status.value
    };

    await fetch(`${BASE_URL}/attendance/mark`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    alert("Attendance Added");
}

// Grades
async function addGrades() {
    const data = {
        student_id: g_student_id.value,
        course_id: g_course_id.value,
        marks: marks.value
    };

    await fetch(`${BASE_URL}/grades/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    alert("Grades Added");
}

// Auto load students + count on page load
window.onload = function () {
    getStudents();
};