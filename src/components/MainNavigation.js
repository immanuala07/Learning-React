import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							
							/*
							className can either be a string or a function that returns a string.
							If the function className is used, the link’s active state is passed as a parameter.
							This is helpful if you want to exclusively apply a className to an inactive link.

							In React Router v6, activeClassName will be removed and
							you should use the function className to apply classnames to either active or
							inactive NavLink components.
							*/
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							
							/*
							'end' prop ensures this component isn't matched as "active"
							when its descendant paths are matched.
							
							For example, to render a link
							that is only active at the website root and not any other URLs,
							*/
							end

							/*
							// Inline styles for NavLink
							style={({ isActive }) => ({
							 	textAlign: isActive ? 'center' : 'left'
							})
							*/
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/products"
							
							/*
							className can either be a string or a function that returns a string.
							If the function className is used, the link’s active state is passed as a parameter.
							This is helpful if you want to exclusively apply a className to an inactive link.

							In React Router v6, activeClassName will be removed and
							you should use the function className to apply classnames to either active or
							inactive NavLink components.
							*/
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}

							/*
							// Inline styles for NavLink
							style={({ isActive }) => ({
							 	textAlign: isActive ? 'center' : 'left'
							})
							*/
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
