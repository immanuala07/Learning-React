import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    fetch("https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json")
      .then((response) => response.json())
      .then((responseData) => {
        /*
        JavaScript loops: JavaScript supports different kinds of loops:
        *) for - loops through a block of code a number of times.
        *) for/in - loops through the properties of an object.
        *) for/of - loops through the values of an iterable object.
        *) while - loops through a block of code while a specified condition is true.
        *) do/while - also loops through a block of code while a specified condition is true.
        */
        const loadedIngreditent = [];
        for (const key in responseData) {
          loadedIngreditent.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          });
        }
        setUserIngredients(loadedIngreditent);
      });
  }, []);

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
