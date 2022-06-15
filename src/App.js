import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // The React useCallback Hook returns a memoized callback function.
  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.This is useful when passing callbacks to optimized child components
  // that rely on reference equality to prevent unnecessary renders.
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch() method that allows you to fetch data from all sorts of different places and work with the data fetched.
      // It allows you to make an HTTP request, i.e., either a GET request (for getting data) or POST request (for posting data).
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          rreleaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  /*
  useEffect - It is hook allows you to perform side effects in the components.
  Examples - Fetching data, directly updating the DOM, and timers.
  */
  useEffect(() => {
    // After adding the below function within the useCallback hook above so that the below function remains unchanged till the dependencies provided in useCallback and
    // removes unwanted infinite calls of the below function.
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
