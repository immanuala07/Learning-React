import {useEffect, useRef, useState} from 'react';

const SimpleInput = ( props ) => {
  // Use the value only once after the form is submitted
  const nameInputRef = useRef();

  // Use the value for every keystroke on name textfield
  const [ enteredName, setEnteredName ] = useState( '' );

  // We are making the inputs valid as true on load but this is not the right logic to use.
  // To avoid this making a tweak of inputs valid we are adding a new state
  // const [ enteredNameIsValid, setEnteredNameIsValid ] = useState( true );

  const [ enteredNameIsValid, setEnteredNameIsValid ] = useState( false );
  const [ enteredNameTouched, setEnteredNameTouched ] = useState( false );

  // To test whether is there any valid input onload of the page
  useEffect( () => {
    if ( enteredNameIsValid )
    {
      console.log( "Name Input is valid!" );
    }
  }, [ enteredNameIsValid ] )


  const nameInputChangeHandler = ( event ) => {
    setEnteredName( event.target.value );
  };

  const formSubmissionHandler = ( event ) => {
    event.preventDefault();

    setEnteredNameTouched( true );

    if ( enteredName.trim() === '' )
    {
      setEnteredNameIsValid( false );
      return;
    }

    setEnteredNameIsValid( true );
    console.log( enteredName );

    const enteredValue = nameInputRef.current.value;
    console.log( enteredValue );

    // nameInputRef.current.value = '';  => NOT IDEAL, DONT MANIPULATE THE DOM

    // Two way binding
    setEnteredName( '' );
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
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

          ref={nameInputRef}

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
