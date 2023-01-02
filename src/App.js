import { Route } from "react-router-dom";

import Welcome from './pages/Welcome';
import Products from './pages/Product';
import MainHeader from './components/MainHeader';

function App() {
	return (
		<div>
			<header>
				<MainHeader />
			</header>
			<main>
				{/*
				Route is a component that allows us to define a certain path,
				and then the React component that should be loaded
				when that path becomes active in the URL.
				
				Path prop in <Route><Route/>: The path pattern to match against the URL to determine
				if this route matches a URL, link href, or form action.
				*/}
				<Route path="/welcome">
					<Welcome />
				</Route>

				{/*
				Route is a component that allows us to define a certain path,
				and then the React component that should be loaded
				when that path becomes active in the URL.
				
				Path prop in <Route><Route/>: The path pattern to match against the URL to determine
				if this route matches a URL, link href, or form action.
				*/}
				<Route path="/products">
					<Products />
				</Route>
			</main>
		</div>
	);
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/welcome => Products Component
