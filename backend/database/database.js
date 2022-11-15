import mysql from "mysql";
import config from "./../config.js";


const pool=mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    socketPath: config.socketPath,
});

const getPool = ()=>{
    return pool;
};

export default getPool