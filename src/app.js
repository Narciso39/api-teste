import express from "express";
import pool from "./conn.js";
const app = express();
const port = 3000;

app.get('/all', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM user');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});