import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "items",
  initialState: {
    modalIsOpen: false,
    modalMessege: "",
  },
  reducers: {
    hendelModal(state, action) {
      state.modalMessege = action;
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
});
export const { hendelModal } = modalSlice.actions;
export default modalSlice.reducer;
