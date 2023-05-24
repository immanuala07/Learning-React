import React, { useState } from "react";

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
      
    setUserIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => id !== ingredient.id),
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
