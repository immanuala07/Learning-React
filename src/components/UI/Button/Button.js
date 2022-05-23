import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button Running');

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// memo will cause React to skip rendering a component if its props have not changed.
// This can improve performance.
export default React.memo(Button);
