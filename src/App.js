import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  /**
   * The useContext accepts the value provided by React.createContext and
   * then re-render the component whenever its value changes
   * but you can still optimize its performance by using memorization.
   */
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      {/* Instead of forwarding the logoutHandler as prop to navigation component through Main Header component */}
      {/* in dynamic context, we dont just pass data to the components but also the functions */}
      <MainHeader />
      <main>
        {/* Both loginHandler and logoutHandler is consumed directly in login and home compoennt so it can use props here */}
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
