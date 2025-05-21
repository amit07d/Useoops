import React from "react";
import { Link } from "react-router-dom";

function FoodItem({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-600 font-medium">
          Publisher: <span className="text-black">{item.publisher}</span>
        </p>
        <p className="text-md font-semibold">
          Food Name: <span className="text-gray-800">{item.title}</span>
        </p>
        <Link
          to={`/recipe-item/${item.id}`}
          className="inline-block mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default FoodItem;
