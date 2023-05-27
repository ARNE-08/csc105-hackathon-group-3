const mysql = require("mysql2");

module.exports = (req, res) => {
    const { category } = req.body;

    var sql = mysql.format(
        "SELECT locations.*, u.fullname AS creator FROM locations INNER JOIN users u ON locations.user_id = u.id WHERE category = ?",
        [category]
    );

    connection.query(sql, (err, rows) => {
        // Check if cannot find the data in the database then return the error
        if (err) {
            res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            // Return data to the client if success
            return res.json({
                success: true,
                data: rows,
                error: null,
            });
        }
    });
};