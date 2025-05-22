import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const FoodContext = createContext(null);

export default function FoodContextProvider({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [getrecipeDetails, setGetrecipeDetails] = useState(null);
  const [savefavourite, setSavefavourite] = useState(() => {
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(savefavourite))
  },[savefavourite])

  const addToFavourites = (favouriteFood) => {
    if (!savefavourite.some((fav) => fav.id === favouriteFood.id)) {
      setSavefavourite((prev) => [...prev, favouriteFood]);
      toast.success("Recipe added to favourites!", {icon: "💝"});
    } else {
      toast("Already in favourites", {icon: "💾"})
    }
  };

  const removeFromFavourites = (id) => {
    setSavefavourite((prev) => prev.filter((item) => item.id !== id));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const responseData = await response.json();
      if (
        responseData &&
        responseData.data?.recipes &&
        responseData.data.recipes.length
      ) {
        setRecipeList(responseData.data?.recipes);
        setSearchParam("");
      }
      //console.log(responseData);
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <FoodContext.Provider
      value={{
        searchParam,
        setLoading,
        loading,
        recipeList,
        setError,
        error,
        setSearchParam,
        handleSubmit,
        getrecipeDetails,
        setGetrecipeDetails,
        savefavourite,
        setSavefavourite,
        addToFavourites,
        removeFromFavourites
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
