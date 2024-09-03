import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'crud',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, 
    idleTimeout: 60000, 
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });


  export default pool;