import jwt from 'jsonwebtoken';
import CustomError from '../utils/customError.js';
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) throw new CustomError('Not authenticated', 401);
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch {
    throw new CustomError('Invalid token', 401);
  }
};