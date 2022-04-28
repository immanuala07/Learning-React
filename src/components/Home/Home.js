import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';

const Home = () => {
  /**
   * The useContext accepts the value provided by React.createContext and
   * then re-render the component whenever its value changes
   * but you can still optimize its performance by using memorization.
   */
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {/* Consuming the props function */}
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
