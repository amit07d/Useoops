import React, { useContext } from "react";
import { nanoid } from 'nanoid'

const TodoContext = React.createContext({
  todos: [
    {
      id: nanoid(),
      todo: "todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export default TodoContext;

export const useTodo = () => {
  return useContext(TodoContext);
};

