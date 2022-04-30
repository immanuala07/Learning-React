import React from 'react';

import classes from './Input.module.css';

// Refactoring an input component
// Creating a separate input component instead of using two different input element in login component.
const Input = (props) => {
    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`} >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
};

export default Input;