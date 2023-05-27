import React, { useReducer, useCallback, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

const IngredientReducer = (currentIngredient, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredient;
    case "ADD":
      return [...currentIngredient, action.ingredient];
    case "DELETE":
      return currentIngredient.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(IngredientReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch("https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json", {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      setIsLoading(false);
      return response.json();
    }).then((responseData) => {
      dispatch({
        type: "ADD",
        ingredient: {
          id: responseData.name,
          ...ingredient,
        },
      });
    });    
  };

  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(
      `https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project/${ingredientId}.json`,
      {
        method: "DELETE",
      },
    )
      .then((response) => {
        setIsLoading(false);
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch((error) => {
        setError("Somthing went wrong !");
        setIsLoading(false);
      });
  };

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({ type: "SET", ingredient: filteredIngredients });
    // Since setUserIngredients is usestate updating function so it wont changes so we will not add it as dependency
  }, []);

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError} >{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
