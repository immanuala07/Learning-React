import React, { useReducer, useCallback, useMemo } from "react";

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

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("Should not be reached!");
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(IngredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const addIngredientHandler = useCallback((ingredient) => {
    dispatchHttp({ type: "SEND" });
    fetch("https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json", {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      dispatchHttp({ type: "RESPONSE" });
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
  }, []);

  const removeIngredientHandler = useCallback((ingredientId) => {
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project/${ingredientId}.jsn`,
      {
        method: "DELETE",
      },
    )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorMessage: "Somthing went wrong !" });
      });
  }, []);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({ type: "SET", ingredient: filteredIngredients });
    // Since setUserIngredients is usestate updating function so it wont changes so we will not add it as dependency
  }, []);

  const clearError = useCallback(() => {
    dispatchHttp({ type: "CLEAR" });
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
      {httpState.error && <ErrorModal onClose={clearError} >{httpState.error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        
      </section>
    </div>
  );
}

export default Ingredients;
