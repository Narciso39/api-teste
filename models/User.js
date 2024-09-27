import pool from '../config/db.js';

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

    static async destroyUser(id) {
        try {
            const [destroy] = await pool.query(
                'DELETE FROM user WHERE id = ?',
                [id]
            );
            return destroy;
        } catch (err) {
            console.error('Error destroy', err);
            throw new Error('Database query failed');
        }
    }
    static async editUsers(id, firstName, lastName, years) {
        try {
            const [edit] = await pool.query(
                'UPDATE user SET firstname = ?, lastname = ?, years = ? WHERE id = ?',
                [firstName, lastName, years, id]
            );
            return edit;
        } catch (err) {
            console.error('Error update', err);
            throw new Error('Database query failed');
        }
    }

    static async User(id) {
        try {
            const [user] = await pool.query('SELECT * FROM user where id = ?', [
                id,
            ]);
            return user;
        } catch (err) {
            console.error('Error select', err);
            throw new Error('Database query failed');
        }
    }
}

export default UserModel;
