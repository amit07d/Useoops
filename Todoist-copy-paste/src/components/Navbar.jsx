import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center bg-gray-50 p-2 shadow-inner">
      <div className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-medium px-4 py-2 rounded-lg transition-all ${
              isActive
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            `text-lg font-medium px-4 py-2 rounded-lg transition-all ${
              isActive
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          Todos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
