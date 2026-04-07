const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/students", require("./routes/students"));
app.use("/attendance", require("./routes/attendance"));
app.use("/grades", require("./routes/grades"));

app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});