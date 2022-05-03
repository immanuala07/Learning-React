import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

// Refactoring an input component
// Creating a separate input component instead of using two different input element in login component.

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
// This is typically not necessary for most components in the application. 
// However, it can be useful for some kinds of components, especially in reusable component libraries.
const Input = React.forwardRef((props, ref) => {

    // useRef - It helps to get access the DOM node or element, and then we can interact with that
    // that DOM node or element such as focussing the input element or accessing the input element value.
    // It returns the ref object whose.current property initialized to the passed argument.
    // The returned object persist for the lifetime of the component.
    const inputRef = useRef();

    const activate = () => {
        // Focussing the input element
        inputRef.current.focus();
    };

    // useImperativeHandle is used with refs and a ref is just a way to control a DOM element in React.
    // useImperativeHandle should be used with forwardRef
    // The hook useImperativeHandle lets you modify the ref instance that is exposed from parent components when using refs.
    // In other words, the useImperativeHandle gives you the ability to modify a ref that has been created.
    // It allows handling and customizing the returned value explicitly.
    // It allows you to replace the native instances of the ref object with the user - defined ones.
    useImperativeHandle(ref, () => {
        return {
            activate: activate
            // or
            // focus: activate
        };
    });

    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`} >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                // useRef - It helps to get access the DOM node or element, and then we can interact with that
                // that DOM node or element such as focussing the input element or accessing the input element value.
                // It returns the ref object whose.current property initialized to the passed argument.
                // The returned object persist for the lifetime of the component.
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;