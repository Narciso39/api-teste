import pool from "../config/db.js";

class UserModel {
    static async getUsers() {
        try {
            const [rows] = await pool.query('SELECT * FROM user');
            return rows; 
        } catch (err) {
            console.error(err);
            throw new Error('Database query failed'); 
    }
}

static async newUser(firstName, lastName, years) {
    try {
        
        const [result] = await pool.query(
            'INSERT INTO user (firstname, lastname, years) VALUES ( ?, ?, ?)',
            [firstName, lastName, years]
        );
        return result; 
    } catch (err) {
        console.error('Error inserting user:', err);
        throw new Error('Database query failed');
    }
}
}

export default UserModel;
