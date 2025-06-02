import { createPost, getPostsByUser } from '../services/postService.js';

export const addPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const post = await createPost(title, content, req.user.id);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};


export const getPosts = async (req, res, next) => {
    try {
      const posts = await getPostsByUser(req.user.id);
      res.json(posts);
    } catch (err) {
      next(err);
    }
  };