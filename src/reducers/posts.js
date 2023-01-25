import { PostTypes } from "../static/static";

export const postsReducer = (postsState = [], action) => {
  switch (action.type) {
    case PostTypes.FetchAll:
      return action.payload;
    case PostTypes.Create:
      return [...postsState, action.payload];
    case PostTypes.Update:
    case PostTypes.Like:
      return postsState.map((post) => {
        console.log("postReducerAction", action);
        return post._id === action.payload._id ? action.payload : post;
      });
    case PostTypes.Delete:
      return postsState.filter((post) => post._id !== action.payload);
    default:
      return postsState;
  }
};
