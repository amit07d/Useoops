import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = action.payload
      state.pastes.push(todos)
      localStorage.setItem('pastes', JSON.stringify(state.pastes))
    },
    updateTodo: (state, action) => { },
    resetTodo: (state) => { },
    removeTodo: (state, action) => {
      const pasteId = action.payload
      state.pastes = state.pastes.filter((todoId) => todoId._id !== pasteId)
    },
  },
});

export const { addTodo, updateTodo, removeTodo, resetTodo } = pasteSlice.actions;
export default pasteSlice.reducer