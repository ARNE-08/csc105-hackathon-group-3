var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    console.log(decoded);

    connection.query("SELECT * FROM locations WHERE user_id = ?", [decoded.userId], (err, rows) => {
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