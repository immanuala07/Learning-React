import { Fragment } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// Function to sort the array either in ascending or descending order.
const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = (props) => {
	/*
	The useHistory hook gives you access to the history instance
	that you may use to navigate.

	useHistory() - This hook gives the access to the history instance or objects used by React Router.
	Using the history instance you can redirect users to another page.
	The history instance created by React Router uses a Stack( called “History Stack” ),
	that stores all the entries the user has visited.

	History objects typically have the following properties and methods:
	1) push(path, [state]) - (function) Pushes a new entry onto the history stack and
	it allows the user to go back to the previous page.
	It is useful to redirect users to page.
	2) replace(path, [state]) - (function) Replaces the current entry on the history stack
	and it doesn't allows the user to go back to the previous page.
  */
	const history = useHistory();

	/*
	This hook returns the current location object.
	This can be useful if you'd like to perform some side effect
	whenever the current location changes.

	The useLocation hook is a function that returns the location object
	that contains information about the current URL.
	Whenever the URL changes, a new location object will be returned.

	The useLocation hook returns the location object from the current URL,
	which includes the following:
	1) pathname: This is the path of the URL.
	2) search: This is the query string (?) included in the URL.
	3) hash: This is the result of the hash fragment (#) from the URL.
	*/
	const location = useLocation();
	console.log(location);

	// The URLSearchParams() interface defines utility methods to work with the query string of a URL.
	// It is a javascript API which provides a way to get the data in the URL query parameters.
	const queryParams = new URLSearchParams(location.search);

	// URLSearchParams.get() - Returns the first value associated with the given search parameter.
	const isSortingAscending = queryParams.get('sort') === 'asc';

	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	// Button onClick Handler
	const changeSortingHandler = () => {
		/*
		The useHistory hook gives you access to the history instance
		that you may use to navigate.

		useHistory() - This hook gives the access to the history instance or objects used by React Router.
		Using the history instance you can redirect users to another page.
		The history instance created by React Router uses a Stack( called “History Stack” ),
		that stores all the entries the user has visited.

		History objects typically have the following properties and methods:
		1) push(path, [state]) - (function) Pushes a new entry onto the history stack and
		it allows the user to go back to the previous page.
		It is useful to redirect users to page.
		2) replace(path, [state]) - (function) Replaces the current entry on the history stack
		and it doesn't allows the user to go back to the previous page.
		*/
		history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));

		// (OR)
		/*
		React Router allows us to use an alternative description off the destination
		a link should lead to or this programmatic navigation should lead to.
		The below push method is used for complex url,
		we can also pass an object which describes the target's destination.
		*/
		// history.push({
		// 	pathname: location.pathname,
		// 	search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
		// });

		/*
		Pushing this page will rerenders this component.
		Because when we push a page, even if it's the page we're currently on,
		then this page component is re-evaluated,
		because React Router sees that we changed the history
		and therefore it rerenders the page.
		*/
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {isSortingAscending ? 'Descending' : 'Ascending'}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
