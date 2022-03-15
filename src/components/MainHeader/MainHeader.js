import React, { useContext } from 'react';

import Navigation from './Navigation';
import AuthContext from '../../store/auth-context';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
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
  const ctx = useContext(AuthContext);

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={ctx.onLogout} />
    </header>
  );
};

export default MainHeader;
