import React from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
	return (
		/**
		 * It is the React component which subscribes to the context changes.
		 * It allows us to subscribe to the context within the function component.
		 * It requires the function as a component.
		 * A consumer is used to request data through the provider and manipulate the central data store when the provider allows it.
		 * 
		 * <MyContext.Consumer>
		 * 		{ (value) => { render_something_which_is_based_on_the_context_value } }
		 * </MyContext.Consumer >
		 * 
		 * The function component receives the current context value and then returns a React node.
		 * The value argument which passed to the function will be equal to the value prop of the closest Provider for this context in the component tree.
		 * If there is no Provider for this context, the value argument will be equal to the defaultValue which was passed to createContext().
		 */
		<AuthContext.Consumer>
			{(ctx) => {
				return (
					<nav className={classes.nav}>
						<ul>
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Users</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Admin</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<button onClick={props.onLogout}>Logout</button>
								</li>
							)}
						</ul>
					</nav>
				);
			}}
		</AuthContext.Consumer>
  );
};

export default Navigation;
