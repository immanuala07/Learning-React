import React, { useCallback, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
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
      setUserIngredients((prevIngredients) => [
        ...prevIngredients,
        {
          id: responseData.name,
          ...ingredient,
        },
      ]);
    });    
  };

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    fetch(
      `https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project/${id}.jon`,
      {
        method: "DELETE",
      },
    )
      .then((response) => {
        setIsLoading(false);
        setUserIngredients((prevIngredients) =>
          prevIngredients.filter((ingredient) => id !== ingredient.id),
        );
      })
      .catch((error) => {
        setError("Somthing went wrong !");
        setIsLoading(false);
      });
  };

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
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
