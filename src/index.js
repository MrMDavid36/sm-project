import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "./reducers";

const store = configureStore({
  middleware: [thunk],
  reducer: reducer,
});
ReactDOM.render(<App />, document.getElementById("root"));
