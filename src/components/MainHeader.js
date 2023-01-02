import { NavLink } from 'react-router-dom';

import classes from '../components/MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						{/* 						
						A '<Link>' is an element that lets the user navigate to another page by clicking or tapping on it.
						
						In 'react-router-dom', a '<Link>' renders an accessible '<a>' element with a real href
						that points to the resource it's linking to.
						This means that things like right-clicking a '<Link>' work as you'd expect.
						You can use <Link reloadDocument> to skip client side routing
						and let the browser handle the transition normally (as if it were an <a href>).

						'to' prop in <Link> is used as replacement to href prop in <a> tag.
						By using <Link> tag we are not sending a new page request but instead
						we are nagivating in the single page application(SPA).
						*/}
						{/* <Link to="/welcome">Welcome</Link> */}

						{/* 
						A <NavLink> is a special kind of <Link> that knows whether or not it is "active".
						NavLink also will set a CSS class on the active anchor item.

						This is useful when building a navigation menu such as a breadcrumb or a set of tabs 
						where you'd like to show which of them is currently selected.
						It also provides useful context for assistive technology like screen readers.
						*/}
						<NavLink activeClassName={classes.active} to="/welcome">
							Welcome
						</NavLink>
					</li>
					<li>
						{/* 						
						A '<Link>' is an element that lets the user navigate to another page by clicking or tapping on it.
						
						In 'react-router-dom', a '<Link>' renders an accessible '<a>' element with a real href
						that points to the resource it's linking to.
						This means that things like right-clicking a '<Link>' work as you'd expect.
						You can use <Link reloadDocument> to skip client side routing
						and let the browser handle the transition normally (as if it were an <a href>).

						'to' prop in <Link> is used as replacement to href prop in <a> tag.
						By using <Link> tag we are not sending a new page request but instead
						we are nagivating in the single page application(SPA).
						*/}
						{/* <Link to="/products">Products</Link> */}

						{/* 
						A <NavLink> is a special kind of <Link> that knows whether or not it is "active".
						NavLink also will set a CSS class on the active anchor item.
						
						This is useful when building a navigation menu such as a breadcrumb or a set of tabs 
						where you'd like to show which of them is currently selected.
						It also provides useful context for assistive technology like screen readers.
						*/}
						<NavLink
							activeClassName={classes.active}
							to="/products"
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
