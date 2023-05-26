import React, { useCallback, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    fetch("https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json", {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers:{'Content-Type':'application/json'}
    }).then((response)=>{
      return response.json();
    }).then((responseData) => {
      setUserIngredients((prevIngredients) => [
        ...prevIngredients,
        {
          id: responseData.name,
          ...ingredient,
        },
      ]);
    })
    
  };

  const removeIngredientHandler = (id) => {
    /*
    const filteredIngredients = userIngredients.filter(
      (ingredient) => id !== ingredient.id
    );
    setUserIngredients(filteredIngredients);
    */
    
    // or

    fetch(
      `https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project/${id}.json`,
      {
        method: "DELETE",
      },
    ).then((response) => {
      setUserIngredients((prevIngredients) =>
        prevIngredients.filter((ingredient) => id !== ingredient.id),
      );
    });
  };

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
    // Since setUserIngredients is usestate updating function so it wont changes so we will not add it as dependency
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

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
