import React, { useEffect, useRef, useState } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import useHttp  from '../hooks/http';
import './Search.css';

const Search = React.memo(props => {
  const [enteredFilter, setEnteredFilter] = useState('');

  const { onLoadIngredients } = props;

  const inputRef = useRef();

  const {
    isLoading,
    data,
    error,
    sendRequest,
    clear,
  } = useHttp();

  // Below useeffect is going to run when the initially page is loaded and when the dependency value changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
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

       sendRequest(
         "https://fir-project-a6274-default-rtdb.firebaseio.com/Demo-project.json" +
           query,
         "GET",
       );
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };

    /*
    If we have [] as dependencies (i.e. the effect only runs once),
    the cleanup functio runs when the component gets unmounted.
    */
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear} >{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref = {inputRef}
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
