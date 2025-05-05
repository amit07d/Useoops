import React, { useState } from "react";
import data from "./data.js";

// Single Accordion at a time 

function Accordion() {
  const [select, setSelect] = useState("");

  function handleClick(getCurrentId) {
    console.log(getCurrentId);
    setSelect((prev) => (prev === getCurrentId ? "" : getCurrentId));
  }

  return (
    <div className="flex flex-col p-3">
      <div className="gap-2">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() => handleClick(dataItem.id)}
              key={dataItem.id}
              className="border p-2 rounded cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{dataItem.title}</h3>
              <span>{select === dataItem.id ? "-" : "+"}</span>

              {select === dataItem.id && (
                <p className="mt-2 text-gray-700">{dataItem.title}</p>
              )}
            </div>
          ))
        ) : (
          <div>No data found !!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
