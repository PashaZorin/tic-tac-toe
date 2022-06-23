import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./gameSlice";

export default configureStore({
  reducer: {
    todos: itemSlice,
  },
});
