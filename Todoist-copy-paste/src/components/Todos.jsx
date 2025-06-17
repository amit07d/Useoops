import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/paste/pasteSlice.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Todos() {
  const todos = useSelector((state) => state.paste?.pastes || []);
  const [searchContent, setSearchContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterData = todos.filter((todo) => {
    if (!searchContent.trim()) return true;
    return (
      todo.title &&
      todo.title.toLowerCase().includes(searchContent.toLowerCase())
    );
  });

  function handleDelete(pasteId) {
    dispatch(removeTodo(pasteId));
    toast.success("Todo Deleted");
  }

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

  function handleEdit(todoId) {
    navigate(`/?pasteId=${todoId}`);
    toast.success("Edit Todo");
  }

  function handleView(todo) {
    navigate(`/todos/${todo._id}`);
  }

  async function handleShare(todoShare) {
    try {
      if (navigator.share) {
        await navigator.share({
          title: todoShare.title,
          text: `${todoShare.title}\n\n${todoShare.content}`,
          url: window.location.href,
        });
      } else {
        await handleCopy(todoShare);
        toast.info("Content Copied to clipboard");
      }
    } catch (error) {
      toast.error("Sharing Failed");
      console.error("Sharing failed:", error);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form>
        <div>
          <input
            type="search"
            placeholder="Search here.."
            aria-label="Search here.."
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          {filterData.length > 0 &&
            filterData.map((todoItem) => (
              <div
                className="max-w-2xl mx-auto p-4 border rounded mt-2"
                key={todoItem._id || todoItem.title}
              >
                <div className="font-bold text-lg">{todoItem.title}</div>
                <div className="whitespace-pre-wrap text-gray-700">{todoItem.content}</div>

                <div className="flex flex-row gap-4 place-content-evenly mt-2 mb-1.5">
                  <button type="button" onClick={() => handleEdit(todoItem._id)}>
                    📝Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(todoItem._id)}>
                    🗑️Delete
                  </button>
                  <button type="button" onClick={() => handleView(todoItem)}>
                    👁️View
                  </button>
                  <button type="button" onClick={() => handleCopy(todoItem)}>
                    📋Copy
                  </button>
                  <button type="button" onClick={() => handleShare(todoItem)}>
                    📤Share
                  </button>
                </div>

                <div className="text-sm text-gray-500 mt-2">
                  {todoItem.createdAt
                    ? new Date(todoItem.createdAt).toLocaleString()
                    : "Date not available"}
                </div>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}

export default Todos;
