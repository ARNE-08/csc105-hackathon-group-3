var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.userToken;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    // console.log(decoded);

    connection.query("SELECT fullname FROM users WHERE id = ?", [decoded.userId], (err, rows) => {
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
                data: rows[0] && rows[0].fullname,
                error: null,
            });
        }
    });
};