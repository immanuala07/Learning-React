import {useState} from 'react';

const SimpleInput = ( props ) => {

  // Use the value for every keystroke on name textfield
  const [ enteredName, setEnteredName ] = useState( '' );
  const [ enteredNameTouched, setEnteredNameTouched ] = useState( false );

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = ( event ) => {
    setEnteredName( event.target.value );
  };

  const nameInputBlurHandler = ( ( event ) => {
    setEnteredNameTouched( true );
  } );

  const formSubmissionHandler = ( event ) => {
    event.preventDefault();

    setEnteredNameTouched( true );

    if ( !enteredNameIsValid )
    {
      return;
    }
    console.log( enteredName );

    // Two way binding
    setEnteredName( '' );
    setEnteredNameTouched( false );
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          // Use the value for every keystroke on name textfield
          onChange={nameInputChangeHandler}

          // The onblur event occurs when an object loses focus.
          onBlur={nameInputBlurHandler}

          // Two way binding
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
