import React, { useReducer, useCallback, useMemo, useEffect } from "react";

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
  const {
    isLoading,
    data,
    error,
    reqExtra,
    sendRequest,
    reqIdentifier,
    clear,
  } = useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({
        type: "ADD",
        ingredient: {
          id: data.name,
          ...reqExtra,
        },
      });
    }
  }, [data, isLoading, error, reqExtra, reqIdentifier]);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest(
      "https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json",
      "POST",
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    );
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        'REMOVE_INGREDIENT'
      );
    },
    [sendRequest],
  );


  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({ type: "SET", ingredient: filteredIngredients });
    // Since setUserIngredients is usestate updating function so it wont changes so we will not add it as dependency
  }, []);

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
      {error && <ErrorModal onClose={clear} >{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
