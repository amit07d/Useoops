import { useState } from "react";
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { addTodo, updateTodo } from "../features/paste/pasteSlice";
import { useDispatch } from "react-redux";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!title.trim() || !content.trim()) {
      toast.error("Title and content can't be empty");
      setLoading(false);
      return;
    }

    try {
      const paste = {
        title: title.trim(),
        content: content.trim(),
        _id: pasteId || nanoid(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      dispatch(pasteId ? updateTodo(paste) : addTodo(paste));
      
      setTitle("");
      setContent("");
      setSearchParams({});
      toast.success(pasteId ? "Paste updated successfully!" : "New paste created!");
    } catch (error) {
      console.error("Save failed:", error);
      toast.error(`Failed to save: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Paste title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
            aria-label="Paste title"
          />
        </div>

        <div>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Paste content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            disabled={loading}
            aria-label="Paste content"
          />
        </div>

        <button
          type="submit"
          className={`px-4 py-2 rounded text-white ${
            loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </form>
    </div>
  );
}

export default Home;