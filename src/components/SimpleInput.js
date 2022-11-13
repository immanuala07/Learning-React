import {useRef, useState} from 'react';

const SimpleInput = ( props ) => {
  // Use the value only once after the form is submitted
  const nameInputRef = useRef();

  // Use the value for every keystroke on name textfield
  const [ enteredName, setEnteredName ] = useState( '' );

  const [ enteredNameIsValid, setEnteredNameIsValid ] = useState( true );

  const nameInputChangeHandler = ( event ) => {
    setEnteredName( event.target.value );
  };

  const formSubmissionHandler = ( event ) => {
    event.preventDefault();

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

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

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
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
