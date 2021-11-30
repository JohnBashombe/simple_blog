import { Router } from 'express';
import UserController from '../controllers/user'

const User = Router();

User.get('/', UserController.findAll);
User.get('/fetch/:id', UserController.findById);
User.post('/auth/signup', UserController.create);
User.put('/update/:id', UserController.findByIdAndUpdate);
User.delete('/delete/:id', UserController.findByIdAndDelete);

export default User;
