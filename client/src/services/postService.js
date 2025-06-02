import axiosInstance from '../axios/axiosInstance';

const createPost = async ({ title, content }) => {
  const res = await axiosInstance.post('/posts', { title, content });
  console.log(res);
  
  return res.data;
};

const fetchPosts = async () => {
  const res = await axiosInstance.get('/posts');
  return res.data;
};

export default { createPost, fetchPosts };