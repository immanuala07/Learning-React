import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
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

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
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
		history.push('/quotes'); // After submitting the new-quote then the user is redirected to the AllQuotes page.
	};

	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
