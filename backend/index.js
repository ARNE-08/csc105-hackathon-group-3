const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require("cookie-parser");

const port = 8000;

app.use(
    cors({
        origin: ['http://localhost:5174', 'http://localhost:5173'],
        credentials: true,
    })
);

app.use(express.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

const connection = mysql.createConnection({
    host: "db.cshack.site",
    port: "3306",
    user: "group03",
    password: "207215217",
    database: "group03",
});

connection.connect();
global.connection = connection;
console.log("Database is connected");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Login and Register
app.post("/login", require("./route/Login"));
app.post("/register", require("./route/Register"));
//Get information for profile page
app.get("/profile", require("./route/GetProfile"));
app.get("/userEvent", require("./route/GetUserEvent"));
//Get step for home page
app.get("/step", require("./route/GetStep"));
//CRUD event
app.post("/addEvent", require("./route/AddEvent"));
app.get("/getEvent", require("./route/GetEvent"));
app.patch("/editEvent", require("./route/EditEvent"));
app.delete("/deleteEvent", require("./route/DeleteEvent"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
