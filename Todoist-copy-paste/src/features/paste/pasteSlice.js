import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    updateTodo: (state, action) => {},
    resetTodo: (state) => {},
    removeTodo: (state, action) => {},
  },
});

export const { addTodo, updateTodo, removeTodo, resetTodo } = pasteSlice.actions;
export default pasteSlice.reducer