const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { name, location, contact, description, openAt, closeAt, date_start, date_end, category, event_url, banner_url } = req.body;
    // const status = "not complete";

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    console.log(decoded);

    var sql = mysql.format(
        "INSERT INTO locations (user_id, name, location, contact, description, openAt, closeAt, date_start, date_end, category, event_url, banner_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [decoded.userId, name, location, contact, description, openAt, closeAt, date_start, date_end, category, event_url, banner_url]
    );

    connection.query(sql,
        (err, rows) => {
            // Check if cannot find the data in the database then return the error
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            res.json({
                success: true,
                message: "create successful",
            });
        });
};