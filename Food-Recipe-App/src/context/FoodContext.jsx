import { createContext, useState } from "react";

export const FoodContext = createContext(null);

export default function FoodContextProvider({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [getrecipeDetails, setGetrecipeDetails] = useState(null);

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
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
