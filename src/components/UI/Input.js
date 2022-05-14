import React from 'react';

import classes from './Input.module.css';

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
// This is typically not necessary for most components in the application.
// However, it can be useful for some kinds of components, especially in reusable component libraries.
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            {/* Spread operator is used to set the default html tag element props whch are passed from the 'Input' react component 
            instead of setting it individually here using props. */}
            {/* Refer to MealItemForm.js of Input component from line number 8 to 15. */}
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
