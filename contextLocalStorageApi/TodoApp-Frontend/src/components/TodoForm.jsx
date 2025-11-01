import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todos, setTodos] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
      e.preventDefault();
      if (!todos) return
      addTodo(todos)
      setTodos("")
  };

    return <>
        <form onSubmit={add}>
            <input type="text"
                placeholder="Write todo.."
                value={todos}
                onChange={(e) => setTodos(e.target.value)}
            />
            <button className=""
            type="submit"
            >Add</button>
    </form>
    </>
}

export default TodoForm;
