import express from 'express';
import { body } from 'express-validator';
import { login, checkAuth, logout } from '../controllers/userController.js';
import { validate } from '../middlewares/validate.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/login', [body('username').notEmpty(), body('password').notEmpty()], validate, login);
router.get('/check', authMiddleware, checkAuth);
router.post('/logout', logout);
export default router;