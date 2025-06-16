import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.paste?.pastes || []);

  const [searchContent, setSearchContent] = useState("");
  //console.log(todos);

  const dispatch = useDispatch();

  const filterData = todos.filter((todo) => {
    if (!searchContent.trim()) return true;
    return (
      todo.title &&
      todo.title.toLowerCase().includes(searchContent.toLowerCase())
    );
  });

  function handleDelete() {}

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
                      <button>Edit</button>

                      <button onClick={handleDelete}>Delete</button>

                      <button>Update</button>

                      <button>Copy</button>

                      <button>Share</button>
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
