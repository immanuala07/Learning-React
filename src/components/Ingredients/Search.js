import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [enteredFilter, setEnteredFilter] = useState('');

  const { onLoadIngredients } = props;

  // Below useeffect is going to run when the initially page is loaded and when the dependency value changes
  useEffect(() => {
    // Query string which can be understood by firebase
    const query =
      enteredFilter.length === 0
        ? ""
        : `?orderBy="title"&equalTo="${enteredFilter}"`;

    /*
    Add the below entry to the firebase rules after the read and write entry:

    "<firebase-db-name>":{
      ".indexOn": ["title"]
    }
    */

    console.log(
      "https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json" +
      query,
    );

    fetch(
      "https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json" +
      query,
    )
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
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        onLoadIngredients(loadedIngredients);
      });
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
