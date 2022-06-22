import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./gameSlice";
import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    todos: itemSlice,
    modal: modalSlice,
  },
});
