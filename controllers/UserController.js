import UserModel from "../models/User.js";

class UserController {
    static async getAllUsers(req, res) {
        try {
            const result = await UserModel.getUsers();
            res.json(result); 
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).send('Internal Server Error'); 
        }
    }

    static async getUser(req, res) {
           try {
            const {id} = req.body;
            const user = await UserModel.User(id);
            res.json(user);

           } catch (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).send('Erro Interno do Servidor');
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
        } catch (err) {
            console.error('Erro ao criar usuário:', err);
            res.status(500).send('Erro Interno do Servidor');
        }
    }

    static async deleteUser(req, res) {
        try {
            const {id} = req.body;

            const destroy = await UserModel.destroyUser(id);

            if (destroy) { 
                res.status(204).send(); 
               
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (err) {
            console.error('Erro ao deletar o usuário', err);
            res.status(500).send('Erro');
        }
    }

    static async editUser(req, res) {
        try {

            const  {id, firstName, lastName, years} = req.body; 

            const edit  = await UserModel.editUsers(id, firstName, lastName, years);

            if (edit) {
                res.status(204).send();
                
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (err) { 
            console.error('Erro ao editar o usuário', err);
            res.status(500).send('Erro');
        }
    }
}

export default UserController;
