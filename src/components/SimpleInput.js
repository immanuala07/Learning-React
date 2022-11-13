import {useRef, useState} from 'react';

const SimpleInput = ( props ) => {
  // Use the value only once after the form is submitted
  const nameInputRef = useRef();

  // Use the value for every keystroke on name textfield
  const [ enteredName, setEnteredName ] = useState( '' );

  const nameInputChangeHandler = ( event ) => {
    setEnteredName( event.target.value );
  };

  const formSubmissionHandler = ( event ) => {
    event.preventDefault();

    if ( enteredName.trim() === '' )
    {
      return;
    }

    console.log( enteredName );

    const enteredValue = nameInputRef.current.value;
    console.log( enteredValue );

    // nameInputRef.current.value = '';  => NOT IDEAL, DONT MANIPULATE THE DOM

    // Two way binding
    setEnteredName( '' );
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
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
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
