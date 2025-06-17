import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function ViewTodos() {
  const { id } = useParams();
  const allTodoContent = useSelector((state) => state.paste.pastes);

  const todos = allTodoContent.find((todo) => todo._id === id);

  async function handleCopy(todo) {
    try {
      const textToCopy = `${todo.title}\n\n${todo.content}`;
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy text");
      console.error("Copy failed:", error);
    }
  }

  if (!todos) {
    return (
      <div className="text-center mt-10 text-red-600">
        Paste not found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={todos.title}
            disabled
            aria-label="Paste title"
          />
        </div>

        <div>
          <textarea
            className="w-full p-2 border rounded"
            value={todos.content}
            rows={8}
            disabled
            aria-label="Paste content"
          />
        </div>

        <button
          type="button"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => handleCopy(todos)}
        >
          📋 Copy Content
        </button>
      </form>
    </div>
  );
}

export default ViewTodos;
