import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";

function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(FoodContext);
  // console.log(searchParam);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">FoodRecipe</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder="Enter items..."
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type={"submit"}
            className="ml-2 bg-amber-500 text-white px-4 py-1.5 rounded"
          >
            search
          </button>
        </form>
      </div>

      <ul className="flex items-center gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
