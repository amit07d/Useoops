import React, { useState } from "react";
import data from "./data.js";

function MultipleAccordion() {
  const [items, setItems] = useState([]);
  const [enableMultiselection, setEnableMultiselection] = useState(false);

  function handleClick(currentId) {
    if (enableMultiselection) {
      setItems((prev) =>
        prev.includes(currentId)
          ? prev.filter((id) => id !== currentId)
          : [...prev, currentId]
      );
    } else {
      setItems((prev) => (prev[0] === currentId ? [] : [currentId]));
    }
  }

  return (
    <>
      <div className="text-2xl mt-4 text-amber-700 font-extrabold">
        <button onClick={() => setEnableMultiselection(!enableMultiselection)}>
          {enableMultiselection ? "Disable" : "Enable"} Multi Selection
        </button>
      </div>

      <div className="mt-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              onClick={() => handleClick(dataItem.id)}
              className="border p-3 rounded mb-2 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{dataItem.title}</h3>
                <span>{items.includes(dataItem.id) ? "-" : "+"}</span>
              </div>
              {items.includes(dataItem.id) && (
                <p className="mt-2 text-gray-700">{dataItem.content}</p>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </>
  );
}

export default MultipleAccordion;

