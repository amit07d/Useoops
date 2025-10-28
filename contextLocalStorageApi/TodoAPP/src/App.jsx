import "./App.css";
import TodoContextProvider from "./context/TodoContextProvider";
import { TodoForm, TodoItem } from "./components/index";
import { useTodo } from "./context/TodoContext";

function TodoList() {
  const { todos } = useTodo();
  return (
    <div>
      {todos.map((todo) => {
        console.log(todo);
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

function App() {
  return (
    <TodoContextProvider>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
          <TodoList />
        </div>
      </div>
    </TodoContextProvider>
  );
}
export default App;
