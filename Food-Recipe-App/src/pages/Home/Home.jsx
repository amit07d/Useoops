import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContext.jsx";
import FoodItem from "../../components/foodItem/FoodItem.jsx";

function Home() {
  const { loading, recipeList, error } = useContext(FoodContext);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {loading && (
        <div className="text-blue-600 font-semibold text-center text-lg mb-4">
          Loading... Please wait
        </div>
      )}

      {error && (
        <div className="text-red-600 font-semibold text-center text-lg mb-4">
          {error}
        </div>
      )}

      {!loading && !error && recipeList.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 mt-6">
          {recipeList.map((item) => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {!loading && !error && recipeList.length === 0 && (
  <div className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8 bg-yellow-50 rounded-xl shadow-md border border-yellow-200 mt-10 mx-auto max-w-xl">
    <svg
      className="w-16 h-16 text-yellow-400 mb-4 animate-bounce"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h2 className="text-2xl font-bold text-yellow-600 mb-2">
      Oops! No Recipes Found
    </h2>
    <p className="text-gray-700 text-md">
      Try searching something else — we couldn’t find any recipes with your search.
    </p>
  </div>
)}

    </div>
  );
}

export default Home;
