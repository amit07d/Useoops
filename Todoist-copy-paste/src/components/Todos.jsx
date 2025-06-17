import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/paste/pasteSlice.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Todos() {
  const todos = useSelector((state) => state.paste?.pastes || []);

  const [searchContent, setSearchContent] = useState("");
  //console.log(todos);

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
    navigate(`/view/${todo._id}`);
  }

  async function handleShare(todoShare) {
    try {
      if (navigator.share) {
        await navigator.share({
          title: todoShare.title,
          text: todoShare.text,
          url: window.location.href,
        });
      } else {
        await handleCopy(todoShare);
        toast.info("Content Copied to clipboard");
      }
    } catch (error) {
      toast.error("Shareing Failed");
      console.error("Shareing failed:", error);
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <form>
          <div>
            <input
              type="search"
              placeholder="Search here.."
              aria-label="Search here.."
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
            />
          </div>

          <div>
            {filterData.length > 0 &&
              filterData.map((todoItem) => {
                return (
                  <div
                    className="max-w-2xl mx-auto p-4 border rounded mt-2"
                    key={todoItem._id || todoItem.title || nanoid()}
                  >
                    <div>{todoItem.title}</div>
                    <div>{todoItem.content}</div>
                    <div className="flex flex-row gap-4 place-content-evenly mt-2 mb-1.5">
                      <button onClick={() => handleEdit(todoItem._id)}>
                        📝Edit
                      </button>

                      <button onClick={() => handleDelete(todoItem._id)}>
                        🗑️Delete
                      </button>

                      <button onClick={() => handleView(todoItem)}>
                        👁️View
                      </button>

                      <button onClick={() => handleCopy(todoItem)}>
                        📋Copy
                      </button>

                      <button onClick={() => handleShare(todoItem)}>
                        📤Share
                      </button>
                    </div>
                    <div>
                      {todoItem.createdAt
                        ? new Date(todoItem.createdAt).toLocaleString()
                        : "Date not available"}
                    </div>
                  </div>
                );
              })}
          </div>
        </form>
      </div>
    </>
  );
}

export default Todos;
