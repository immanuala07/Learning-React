import { Form, Link, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm () {
	/*
	The useSearchParams hook is used to read and
	modify the query string in the URL for the current location.

	Like React's own useState hook, useSearchParams returns an array of two values:
	the current location's search params and a function that may be used to update them.

	Just as React's useState hook, setSearchParams also supports functional updates.
	Therefore, you provide a function that takes a searchParams and returns an updated version.
	*/
	const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line no-unused-vars
	const isLogin = searchParams.get('mode') === 'login';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
					<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
					</Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
