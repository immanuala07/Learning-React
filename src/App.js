import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AllQuote from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
	return (
		<Layout>
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
				{/* 
                The '*' wildcard character signals to react router
                that any path any URL should match this route,
                and therefore this route has to come last.
                
                So that it does not consume one of the requests
                to one of the actual routes we have.
                But if we didn't have any match up to this point
                then we want to match all URLs with this route.
                And then just rendered this not found page here.
                */}
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
