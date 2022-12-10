import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';

import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App () {
  /*
  const result: any = useSelector(selector: Function, equalityFn?: Function)
  
  Allows you to extract data from the Redux store state, using a selector function.

  The selector will be called with the entire Redux store state as its only argument. The selector will be run whenever the function component renders
  (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector).
  useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

  We may call useSelector() multiple times within a single function component.
  Each call to useSelector() creates an individual subscription to the Redux store.
  Because of the React update batching behavior used in React Redux v7,
  a dispatched action that causes multiple useSelector()s in the same component to return new values should only result in a single re-render.
  */
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
