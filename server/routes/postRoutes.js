import express from 'express';
import { body } from 'express-validator';
import { addPost, getPosts } from '../controllers/postController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/validate.js';

const router = express.Router();
router.post('/', authMiddleware, [body('title').notEmpty(), body('content').notEmpty()], validate, addPost);
router.get('/', authMiddleware, getPosts);
export default router;
