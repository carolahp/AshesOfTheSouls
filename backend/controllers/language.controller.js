import getPool from "./../database/database.js";

const getLanguages = async(req, res) => {
    const pool = await getPool();
    const result = await pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("SELECT * FROM Product p JOIN Media m ON m.idProduct=p.idProduct WHERE m.position = 1", function (err, result, fields) {
            connection.release();
            if (err) throw err;
            console.log(result);
            var jsonProducts = JSON.stringify(result);
            console.log(jsonProducts);
        });
    });
};

export const methods = {
    getLanguages
};