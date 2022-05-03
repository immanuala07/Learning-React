import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

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

	// useRef - It helps to get access the DOM node or element, and then we can interact with that
	// that DOM node or element such as focussing the input element or accessing the input element value.
	// It returns the ref object whose.current property initialized to the passed argument.
	// The returned object persist for the lifetime of the component.
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

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
	  if (formIsValid) {
		  authCtx.onLogin(emailState.value, passwordState.value);
	  } else if (!emailIsValid) {
		  // Focussing the email input
		  // Calling the function property within the useImperativeHandle in Input component
		  emailInputRef.current.activate();
		  // or
		  // emailInputRef.current.focus();
	  } else {
		  // Focussing the password input
		  // Calling the function property within the useImperativeHandle in Input component
		  passwordInputRef.current.activate();
		  // or
		  // emailInputRef.current.focus();
	  }
  };

  return (
	  <Card className={classes.login}>
		  <form onSubmit={submitHandler}>
			  <Input
				  // useRef - It helps to get access the DOM node or element, and then we can interact with that
				  // that DOM node or element such as focussing the input element or accessing the input element value.
				  // It returns the ref object whose.current property initialized to the passed argument.
				  // The returned object persist for the lifetime of the component.
				  ref={emailInputRef}
				  id="email"
				  label="E-Mail"
				  type="email"
				  isValid={emailIsValid}
				  value={emailState.value}
				  onChange={emailChangeHandler}
				  onBlur={validateEmailHandler}
			  />
			  <Input
				  // useRef - It helps to get access the DOM node or element, and then we can interact with that
				  // that DOM node or element such as focussing the input element or accessing the input element value.
				  // It returns the ref object whose.current property initialized to the passed argument.
				  // The returned object persist for the lifetime of the component.
				  ref={passwordInputRef}
				  id="password"
				  label="Password"
				  type="password"
				  isValid={passwordIsValid}
				  value={passwordState.value}
				  onChange={passwordChangeHandler}
				  onBlur={validatePasswordHandler}
			  />
			  <div className={classes.actions}>
				  <Button type='submit' className={classes.btn} >
					  Login
				  </Button>
			  </div>
		  </form>
	  </Card>
  );
};

export default Login;
