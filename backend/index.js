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

// const connection = mysql.createConnection({
//     host: "server2.bsthun.com",
//     port: "6105",
//     user: "lab_1ixvld",
//     password: "oRFs2kOQYisEMVo5",
//     database: "lab_blank01_1i3nrsg",
// });

connection.connect();
global.connection = connection;
console.log("Database is connected");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//marked
// app.post("/login", require("./route/Login"));
// app.post("/regis", require("./route/Register"));
// app.get("/getAllTodos", require("./route/GetTodos"));
// app.post("/addTodo", require("./route/AddTodo"));
// app.patch("/editTodo", require("./route/EditTodo"));
// app.delete("/deleteTodo", require("./route/DeleteTodo"));
// app.delete("/deleteAll", require("./route/DeleteAll"));
// app.patch("/completeTodo", require("./route/CompleteTodo"));
// app.patch("/completeAll", require("./route/Complete"));
// app.get("/getUser", require("./route/GetUser"));
// app.get("/getProfilePic", require("./route/GetProfile"));
// app.patch("/changeProfilePic", require("./route/ChangeProfile"));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
