import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import postsReducer from "./reducers/postsSlice";
const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
