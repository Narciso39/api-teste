import express from "express";
import UserController from "../controllers/UserController.js";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
  });

router.get('/all', UserController.getAllUsers);
router.post('/newUser', UserController.addNewUser);
router.post('/deleteUser', UserController.deleteUser);

export default router;