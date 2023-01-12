import { Fragment, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
	/*
	The useRouteMatch hook attempts to match the current URL in the same way that a <Route> would.
	It’s mostly useful for getting access to the match data without actually rendering a <Route>.
	The returned match object contains information about how a <Route path> matched the URL.
	match objects contain the following properties:
		1) params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
		2) isExact - (boolean) true if the entire URL was matched (no trailing characters)
		3) path - (string) The path pattern used to match. Useful for building nested <Route>s
		4) url - (string) The matched portion of the URL. Useful for building nested <Link>s
	*/
	const match = useRouteMatch();

	const params = useParams();

	const { quoteId } = params;

	const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className='centered'>{error}</p>;
	}

	if (!loadedQuotes.text) {
		return <p>No quote found!</p>;
	}

	return (
		// React Fragment - <></>
		<Fragment>
			<HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />

			{/*
			Below Route component is used to hide the load Comments link once after it is clicked and
			In path prop of Route component, we were using concrete value and that also works,
			but now we have defined the path prop of route component with a placeholder
			because after all this is a route definition but not a link, so having a placeholder is okay.
			*/}
			<Route path={match.path} exact>
				<div className="centered">
					{/*
					Since this is a link definition but not a route, so we are having a concrete value in 'to' prop of Link component.
					*/}
					<Link
						className="btn--flat"
						to={`${match.url}/comments`}
					>
						Load Comments
					</Link>
				</div>
			</Route>

			{/*
			In path prop of Route component, we were using concrete value and that also works,
			but now we have defined the path prop of route component with a placeholder
			because after all this is a route definition but not a link, so having a placeholder is okay.
			*/}
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>

			{/* 
			Define a route not a link, and also we can set the path as below
			*/}
			{/*
			<Route path="/quotes/:quoteId/comments">
				<Comments />
			</Route>
			*/}
		</Fragment>
	);
};

export default QuoteDetail;
