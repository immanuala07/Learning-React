import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm () {
  /*
  This hook provides the returned value from the previous navigation's action result,
  or undefined if there was no submission.
  The most common use-case for this hook is form validation errors.
  useActionData() return the action function data.
  */
  const data = useActionData();

  /*
  useNavigation() - This hook tells you everything you need to know about a page navigation
  to build pending navigation indicators and optimistic UI on data mutations.
  Things like:
  Global loading indicators
  Disabling forms while a mutation is happening
  Adding busy indicators to submit buttons
  Optimistically showing a new record while it's being created on the server
  Optimistically showing the new state of a record while it's being updated
  */
  const navigation = useNavigation();

  /*
  navigation.state
  idle - There is no navigation pending.
  submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
  loading - The loaders for the next routes are being called to render the next page
  Normal navigations and GET form submissions transition through these states:
  idle → loading → idle
  Form submissions with POST, PUT, PATCH, or DELETE transition through these states:
  idle → submitting → loading → idle
  */
  const isSubmitting = navigation.state === "submitting";

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

        {data && data.errors && (
          <ul>
            {/* Object.values() returns an array. */}
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        {data && data.message && <p>{data.message}</p>}

        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
