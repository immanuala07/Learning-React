import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
	console.log(state);
	console.log(action);

	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}
	return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
	console.log(state);
	console.log(action);
	// state holds the previous state/data snapshot
	// action hold the 
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: '', isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

	// Grouping email state together using useReducer function
	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null
	});
	// Grouping password state together using useReducer function
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null
	});

	/**
	 * The useContext accepts the value provided by React.createContext and
	 * then re-render the component whenever its value changes
	 * but you can still optimize its performance by using memorization.
	 */
	const authCtx = useContext(AuthContext);

	// Object destructing and vaues are assigned to a variable with a different name than the object.
	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	// AFter adding the object destructing - we dont re-run the effect whenever prompts or certain variable or value.
	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log('Checking form validity!');
			setFormIsValid(
				emailIsValid && passwordIsValid
			);
		}, 500);

		return () => { // Cleanp function
			console.log('CLEANUP');
			clearTimeout(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

		setFormIsValid(
			event.target.value.includes('@') && passwordState.isValid
		);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

		setFormIsValid(
			emailState.isValid && event.target.value.trim().length > 6
		);
  };

  const validateEmailHandler = () => {
	  dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
	  dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
	  event.preventDefault();
	  authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
	  <Card className={classes.login}>
		  <form onSubmit={submitHandler}>
			  <div
				  className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
					  }`}
			  >
				  <label htmlFor='email'>E-Mail</label>
				  <input
					  type='email'
					  id='email'
					  value={emailState.value}
					  onChange={emailChangeHandler}
					  onBlur={validateEmailHandler}
				  />
			  </div>
			  <div
				  className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
					  }`}
			  >
				  <label htmlFor='password'>Password</label>
				  <input
					  type='password'
					  id='password'
					  value={passwordState.value}
					  onChange={passwordChangeHandler}
					  onBlur={validatePasswordHandler}
				  />
			  </div>
			  <div className={classes.actions}>
				  <Button type='submit' className={classes.btn} disabled={!formIsValid}>
					  Login
				  </Button>
			  </div>
		  </form>
	  </Card>
  );
};

export default Login;
