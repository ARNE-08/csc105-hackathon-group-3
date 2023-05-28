const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { id, location, contact, event_url } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");

    var sql = mysql.format(
        "UPDATE locations SET location = ?, contact = ?, event_url = ? WHERE user_id = ? AND id = ?",
        [location, contact, event_url, decoded.userId, id]
    );

    connection.query(sql,
        (err, rows) => {
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            else {
                res.json({
                    success: true,
                    message: "update successfully",
                });
            }
        });
};