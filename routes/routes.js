import express from 'express';
import UserController from '../controllers/UserController.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/all', UserController.getAllUsers);
router.get('/user/:id', UserController.getUser);
router.post('/newUser', UserController.addNewUser);
router.post('/deleteUser/:id', UserController.deleteUser);
router.post('/editUser/:id', UserController.editUser);

export default router;
