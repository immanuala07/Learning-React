import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  // If the useEffect dependency is [], 
  // useEffect function will only run when the component was first loaded.
  useEffect(() => {
    // The function you pass to useEffect should not return a promise.
    // Instead, the function we pass to useEffect may return a cleanup function which can be executed.
    // That cleanup function should run synchronously though.
    // It should not return a promise.

    // Instead, if you wanna use async await instead of useEffect,
    // simply create a new function here, fetchMeals, like this,
    // and use async here and put your code, this line of code,
    // into this nested inner function, and then just execute fetchMeals as part of useEffect.
    // By doing it that way, this function is still executed, and you can still use async await,
    const fetchMeals = (async () => {
      const response = await fetch("https://react-http-1e116-default-rtdb.firebaseio.com/meals.json");
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      // Initially, the page is loaded without the data 
      // So, we are using useState setter function to reload the component with data.
      setMeals(loadedMeals);
    });

    // Calling fetchMeals() async function
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
