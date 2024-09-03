import UserModel from "../models/User.js";

class UserController {
    static async getAllUsers(req, res) {
        try {
            const result = await UserModel.getUsers();
            res.json(result); 
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).send('Internal Server Error'); 
        }
    }

    static async addNewUser(req, res) {
        try {
            const { firstName, lastName, years } = req.body; 

            if (!firstName || !lastName || typeof years === 'undefined') {
                return res.status(400).send('Bad Request: Campos obrigatórios ausentes');
            }

            const result = await UserModel.newUser(firstName, lastName, years);
            res.status(201).json({ message: 'Usuário criado com sucesso', result });
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).send('Erro Interno do Servidor');
        }
    }
}

export default UserController;
