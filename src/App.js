import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*
	useEffect - It is hook allows you to perform side effects in the components.
	Examples - Fetching data, directly updating the DOM, and timers.
	*/
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    /**
     * When a component does not have a matching Provider in the component tree, it returns the defaultValue argument.
     * It is very helpful for testing components isolation (separately) without wrapping them.
     *
     * <MyContext.Provider value={some_value}>
     *
     * It accepts the value prop and passes to consuming components which are descendants of this Provider.
     * We can connect one Provider with many consumers.
     * Context Providers can be nested to override values deeper within the component tree.
     * All consumers that are descendants of a Provider always re-render whenever the Provider's value prop is changed.
     * The changes are determined by comparing the old and new values using the same algorithm as Object.is algorithm.
     */
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,

        // Making the Context dynamic
        // in dynamic context, we dont just pass data to the components but also the functions
        onLogout: logoutHandler
      }}
    >
      {/* Instead of forwarding the logoutHandler as prop to navigation component through Main Header component */}
      {/* in dynamic context, we dont just pass data to the components but also the functions */}
      <MainHeader />
      <main>
        {/* Both loginHandler and logoutHandler is consumed directly in login and home compoennt so it can use props here */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
