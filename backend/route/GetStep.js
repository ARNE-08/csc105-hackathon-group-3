module.exports = (req, res) => {
    const { category } = req.body;

    connection.query("SELECT step FROM steps WHERE category = ?",
        [category], (err, rows) => {
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
                    data: rows[0],
                    error: null,
                });
            }
        });
};