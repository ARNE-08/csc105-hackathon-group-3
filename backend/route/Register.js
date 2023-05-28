const mysql = require("mysql2");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    const { fullname, lastname, company_organization, email, password, tel, profile_picture } = req.body;
    const salt1 = await bcrypt.genSalt(10);
    const hash1 = await bcrypt.hash(password, salt1);

    // Check if username already exists
    var checkUsernameQuery = mysql.format("SELECT * FROM users WHERE (fullname = ? AND lastname = ?) OR email = ?", [fullname, lastname, email]);
    connection.query(checkUsernameQuery, (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }

        if (rows.length > 0) {
            // Username already exists
            return res.json({
                success: false,
                data: null,
                error: "Account is already exists",
            });
        }

        // Username does not exist, proceed with registration
        var insertQuery = mysql.format(
            "INSERT INTO users (fullname, lastname, company_organization, email, hashed_password, tel, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [fullname, lastname, company_organization, email, hash1, tel, profile_picture]
        );

        connection.query(insertQuery, (err, rows) => {
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            res.json({
                success: true,
                message: "User has been created",
            });
        });
    });
};