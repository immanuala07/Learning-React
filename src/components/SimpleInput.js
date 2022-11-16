import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '');

  // Use the value for every keystroke on name textfield
  const [ enteredEmail, setEnteredEmail ] = useState( '' );
  const [ enteredEmailTouched, setEnteredEmailTouched ] = useState( false );

  // const emailRegex = /\S+@\S+\.\S+/;
  // const enteredEmailIsValid = emailRegex.test( enteredEmail );
  const enteredEmailIsValid = enteredEmail.includes( '@' );
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if ( enteredNameIsValid && enteredEmailIsValid )
  {
    formIsValid = true;
  }

  const emailInputChangeHandler = ( event ) => {
    setEnteredEmail( event.target.value );
  };

  const emailInputBlurHandler = ( ( event ) => {
    setEnteredEmailTouched( true );
  } );

  const formSubmissionHandler = ( event ) => {
    event.preventDefault();

    if ( !enteredNameIsValid && !enteredEmailIsValid )
    {
      return;
    }
    console.log( enteredName );
    console.log( enteredEmail );

    // Two way  binding
    resetNameInput();
    setEnteredEmail('');
    setEnteredEmailTouched( false );
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          // Use the value for every keystroke on name textfield
          onChange={nameChangeHandler}

           // The onblur event occurs when an object loses focus.
          onBlur={nameBlurHandler}

          // Two way binding
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          // Use the value for every keystroke on name textfield
          onChange={emailInputChangeHandler}

          // The onblur event occurs when an object loses focus.
          onBlur={emailInputBlurHandler}

          // Two way binding
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className='error-text'>Please enter a valid email.</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
