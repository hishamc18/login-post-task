import prisma from '../config/prismaClient.js';

export const createPost = async (title, content, userId) => {
  return await prisma.post.create({ data: { title, content, userId } });
};

export const getPostsByUser = async (userId) => {
  const posts = await prisma.post.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: 'desc' },
  });
  return posts
};
