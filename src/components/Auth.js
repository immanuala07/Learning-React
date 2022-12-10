import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
  // This hook returns a reference to the dispatch function from the Redux store.
  // You may use it to dispatch actions as needed.
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login()); // Dispatch action  with action creator
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
