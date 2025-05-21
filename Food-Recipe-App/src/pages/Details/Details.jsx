import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import toast from "react-hot-toast";

function Details() {
  const {
    getrecipeDetails,
    setGetrecipeDetails,
    loading,
    error,
    setError,
    setLoading,
    addToFavourites
  } = useContext(FoodContext);

  const { id } = useParams();

  async function recipeDetails() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const responseData = await response.json();
      setGetrecipeDetails(responseData.data.recipe);
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    recipeDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {loading && (
        <div className="text-center text-2xl text-gray-600 mt-12">
          Loading recipe details...
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 text-xl p-4 bg-red-50 rounded-lg max-w-2xl mx-auto">
          {error}
        </div>
      )}

      {!loading && !error && getrecipeDetails?.title && (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-64 w-full object-cover md:w-96"
                src={getrecipeDetails.image_url}
                alt={getrecipeDetails.title}
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {getrecipeDetails.title}
              </h1>
              <div className="mb-6 flex flex-col md:flex-row md:items-center gap-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  By {getrecipeDetails.publisher}
                </span>
                <button
                  onClick={() => {
                    addToFavourites(getrecipeDetails);
                    toast.success("Recipe added to favourites!");
                  }}
                  
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Save as Favorites
                </button>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Ingredients
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {getrecipeDetails.ingredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-600 text-sm">
                        {ing.quantity && (
                          <span className="font-medium">{ing.quantity}</span>
                        )}{" "}
                        {ing.unit} {ing.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
