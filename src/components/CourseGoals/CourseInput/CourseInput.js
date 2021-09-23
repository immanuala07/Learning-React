import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  /* useState is used to set dynamic inline styles if the inputbox is empty */
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* Setting dynamic inline styles if the inputbox is empty */}
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        {/* Setting dynamic inline styles if the inputbox is empty */}
        <input type="text" onChange={goalInputChangeHandler}
          style={{
            color: !isValid ? 'red' : '#ccc',
            background: !isValid ? 'salmon' : 'transparent'
          }} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
