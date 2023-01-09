import { Fragment } from 'react';
import { Link, Route, useParams } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Max', text: 'Learning React is fun!' },
	{ id: 'q2', author: 'Maximilian', text: 'Learning React is great!' }
];

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		// React Fragment - <></>
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />

			{/* Below Route component is used to hide the load Comments link once after it is clicked */}
			<Route path="/quotes/:quoteId" exact>
				<div className="centered">
					<Link
						className="btn--flat"
						to={`/quotes/${params.quoteId}/comments`}
					>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`/quotes/${params.quoteId}/comments`}>
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
