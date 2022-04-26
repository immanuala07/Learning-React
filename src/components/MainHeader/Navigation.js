import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  /**
   * The useContext accepts the value provided by React.createContext and
   * then re-render the component whenever its value changes
   * but you can still optimize its performance by using memorization.
   */
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {/* Consuming the  context value*/}
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {/* Consuming the  context value*/}
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {/* Consuming the  context value*/}
        {ctx.isLoggedIn && (
          <li>
             {/* Making the Context dynamic */}
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
