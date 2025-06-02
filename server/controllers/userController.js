import jwt from 'jsonwebtoken';
import CustomError from '../utils/customError.js';
import { getUserByUsername, comparePassword } from '../services/userService.js';

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
    
    if (!user || !(await comparePassword(password, user.password))) {
      throw new CustomError('Invalid credentials', 401);
    }
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Lax',
      secure: false,  
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ message: 'Login successful' });
  } catch (err) {
    next(err);
  }
};


export const checkAuth = (req, res) => {
  if (req.user) {
    return res.status(200).json({ message: 'Authenticated' });
  }
  res.status(401).json({ message: 'Not authenticated' });
};

export const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'Lax',
    secure: false,  
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return res.status(200).json({ message: 'Logged out successfully' });
};