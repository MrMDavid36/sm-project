import { createSlice } from "@reduxjs/toolkit";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../api/posts";
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  extraReducers(builder) {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload];
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    });
  },
});

export const {
  saveAllPosts,
  saveCreatedPost,
  saveUpdatedPost,
  removeSavedPost,
} = postsSlice.actions;

export default postsSlice.reducer;
