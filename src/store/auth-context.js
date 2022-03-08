import React from 'react';

// Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.
/**
 * It creates a context object.
 * When React renders a component which subscribes to this context object, then it will read the current context value from the matching provider in the component tree.
 * 
 * const MyContext = React.createContext(defaultValue);
 * 
 * When a component does not have a matching Provider in the component tree, it returns the defaultValue argument.
 * It is very helpful for testing components isolation (separately) without wrapping them.
 */
const AuthContext = React.createContext({
	isLoggedIn: false
});

export default AuthContext;