const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { id, name, location, contact, description, openAt, closeAt, date_start, date_end, category, event_url, banner_url } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    console.log(decoded);

    var sql = mysql.format(
        "UPDATE locations SET name = ?, location = ?, contact = ?, description = ?, openAt = ?, closeAt = ?, date_start = ?, date_end = ?, category = ?, event_url = ?, banner_url = ? WHERE user_id = ? AND id = ?",
        [name, location, contact, description, openAt, closeAt, date_start, date_end, category, event_url, banner_url, decoded.userId, id]
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
                message: "update successfully",
            });
        });
};