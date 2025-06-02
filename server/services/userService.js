import prisma from '../config/prismaClient.js';

export const getUserByUsername = async (username) => {
  return await prisma.user.findUnique({ where: { username } });
};

export const comparePassword = (password, hash) => {
  return password === hash;
};