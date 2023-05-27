var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.user;
    const { id } = req.body;

    var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    console.log(decoded);

    connection.query("DELETE from locations WHERE user_id = ? AND id = ?", [decoded.userId, id], (err, rows) => {
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
                data: {
                    message: "delete successfully",
                },
                error: null,
            });
        }
    });
};