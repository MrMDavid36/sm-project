import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/posts";

// Action Creators
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost) => {
    try {
      const { data } = await axios.post(url, newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, newPost }) => {
    try {
      const { data } = await axios.patch(`${url}/${id}`, newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const likePost = createAsyncThunk("posts/likePost", async (id) => {
  try {
    const { data } = await axios.patch(`${url}/${id}/likePost`);
    return data;
  } catch (error) {
    console.log(error);
  }
});
