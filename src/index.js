import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import postsReducer from "./reducers/postsSlice";
import authReducer from "./reducers/authSlice";
import memoriesCreds from "./components/Auth/creds/memoriesCreds.json";
const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={memoriesCreds.web.client_id}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
