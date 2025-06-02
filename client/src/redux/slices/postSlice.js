import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postService from '../../services/postService';

export const createPost = createAsyncThunk('post/create', postService.createPost);
export const fetchPosts = createAsyncThunk('post/fetchAll', postService.fetchPosts);

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export default postSlice.reducer;