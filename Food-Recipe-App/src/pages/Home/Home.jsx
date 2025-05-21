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
        <div className="text-gray-600 text-center mt-6">
          Items not available right now.
        </div>
      )}
    </div>
  );
}

export default Home;
