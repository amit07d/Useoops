import { useState } from "react";
import TodoContext from "./TodoContext";
import { nanoid } from "nanoid";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, { id: nanoid(), todo: todoText, completed: false }]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...newTodo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
