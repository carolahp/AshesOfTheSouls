import getPool from "../database/database.js";

const getProducts = async (req, res) => {
    const pool = getPool();
    const result = pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
            "SELECT * FROM Product p JOIN Media m ON m.idProduct=p.idProduct WHERE m.position = 1" ,
            function (err, result, fields) {
                connection.release();
                if (err) throw err;
                res.json(result);
            });
    });
};

// const getProduct = async (req, res) => {
//     const pool = getPool();
//     const { idProduct } = req.body;

//     if(idProduct === undefined) {
//         res.status(400).json({message: 'Bad request, please send id'});
//     };

//     const result = pool.getConnection((err, connection) => {
//         if (err) throw err;
//         connection.query(
//             "SELECT * FROM Product p JOIN Media m ON m.idProduct=p.idProduct WHERE m.position = 1" ,
//             function (err, result, fields) {
//                 connection.release();
//                 if (err) throw err;
//                 res.json(result);
//             });
//     });
// };

export const methods = {
    getProducts
};