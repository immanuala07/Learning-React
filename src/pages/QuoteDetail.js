import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
	const params = useParams();

	return (
		// React Fragment - <></>
		<>
			<h1>Quote Detail Page</h1>
			<p>{params.quoteId}</p>
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
		</>
	);
};

export default QuoteDetail;
