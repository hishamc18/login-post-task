import axiosInstance from '../axios/axiosInstance';

const login = async ({ username, password }) => {
  try {
    const res = await axiosInstance.post('/users/login', { username, password });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message);
  }
};

const checkAuth = async () => {
  try {
    const res = await axiosInstance.get('/users/check');
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Not authenticated');
  }
};

const logout = async () => {
  try {
    const res = await axiosInstance.post('/users/logout');
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Logout failed');
  }
};

export default { login, checkAuth, logout };
