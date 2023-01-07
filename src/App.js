import { Redirect, Route, Switch } from 'react-router-dom';

import AllQuote from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact>
					{/*
                    Rendering a <Redirect> will navigate to a new location.
                    
                    The new location will override the current location in the history stack,
                    like server-side redirects (HTTP 3xx) do.
                    */}
					<Redirect to="/quotes" />
				</Route>
				<Route path="/quotes" exact>
					<AllQuote />
				</Route>
				<Route path="/quotes/:quoteId">
					<QuoteDetail />
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
