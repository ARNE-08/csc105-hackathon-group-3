const mysql = require("mysql2");

module.exports = (req, res) => {
    const { category } = req.body;

    var sql = mysql.format(
        "SELECT id, name, location, contact, description, openAt, closeAt, date_start, date_end, event_url, banner_url FROM locations WHERE category = ?",
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