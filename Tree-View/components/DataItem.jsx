import React, { useState } from "react";
import DataList from "./DataList.jsx";

function DataItem({ item }) {
  const [showChildren, setShowChildren] = useState(false);

  const handleToggleChildren = () => {
    setShowChildren((prev) => !prev);
  };

  return (
    <li className="ml-4 mt-2 list-none">
      <div className="flex items-center gap-2 cursor-pointer group" onClick={handleToggleChildren}>
        {item.children?.length > 0 && (
          <button
            className="w-6 h-6 flex items-center justify-center text-sm font-bold bg-gray-200 rounded group-hover:bg-gray-300 transition"
            aria-label="Toggle children"
          >
            {showChildren ? "−" : "+"}
          </button>
        )}
        <p className="text-gray-800 group-hover:text-blue-600 font-medium">{item.label}</p>
      </div>

      {showChildren && item.children?.length > 0 && (
        <div className="ml-6 mt-1 border-l border-gray-300 pl-3">
          <DataList list={item.children} />
        </div>
      )}
    </li>
  );
}

export default DataItem;
