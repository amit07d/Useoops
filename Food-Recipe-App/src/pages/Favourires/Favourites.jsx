import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function Favourites() {
  const { savefavourite, removeFromFavourites } = useContext(FoodContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            My Favourite Recipes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {savefavourite.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm max-w-2xl mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-rose-200 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h2 className="text-xl font-medium text-gray-600 mb-2">
              No favourites yet
            </h2>
            <p className="text-gray-500 mb-6">
              Save your favorite recipes to see them here
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savefavourite.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/details/${recipe.id}`}>
                  <img
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    src={recipe.image_url}
                    alt={recipe.title}
                  />
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Link to={`/details/${recipe.id}`}>
                      <h2 className="text-xl font-bold text-gray-800 hover:text-rose-600 transition-colors line-clamp-2">
                        {recipe.title}
                      </h2>
                    </Link>
                    <button
                      onClick={() => removeFromFavourites(recipe.id)}
                      className="text-rose-500 hover:text-rose-700 transition-colors"
                      aria-label="Remove from favorites"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    {recipe.publisher}
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        removeFromFavourites(recipe.id);
                        toast.success("Removed from favourites", {icon: "😞"});
                      }}
                      className="text-sm px-4 py-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;