import React, { useReducer, useCallback, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../hooks/http";

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
  const { isLoading, data, error, sendRequest } = useHttp();

  const addIngredientHandler = useCallback((ingredient) => {
    // dispatchHttp({ type: "SEND" });
    fetch("https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json", {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      // dispatchHttp({ type: "RESPONSE" });
      return response.json();
    }).then((responseData) => {

      console.log(responseData);

      // dispatch({
      //   type: "ADD",
      //   ingredient: {
      //     id: responseData.name,
      //     ...ingredient,
      //   },
      // });
    });    
  }, []);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project/${ingredientId}.json`,
        "DELETE",
      );

      // dispatchHttp({ type: "SEND" });
    },
    [sendRequest],
  );

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({ type: "SET", ingredient: filteredIngredients });
    // Since setUserIngredients is usestate updating function so it wont changes so we will not add it as dependency
  }, []);

  const clearError = useCallback(() => {
    // dispatchHttp({ type: "CLEAR" });
  });

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError} >{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
