import React, { useState, useEffect } from 'react';

// Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.
/**
 * It creates a context object.
 * When React renders a component which subscribes to this context object, then it will read the current context value from the matching provider in the component tree.
 * 
 * const MyContext = React.createContext(defaultValue);
 * 
 * When a component does not have a matching Provider in the component tree, it returns the defaultValue argument.
 * It is very helpful for testing components isolation (separately) without wrapping them.
 */
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * useEffect - It is hook allows you to perform side effects in the components.
   * Examples - Fetching data, directly updating the DOM, and timers.
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
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
