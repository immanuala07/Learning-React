import { Route } from "react-router-dom";

import Welcome from './pages/Welcome';
import Products from './pages/Product';
import ProductDetail from './pages/ProductDetail';

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

				{/* 
				Route is a component that allows us to define a certain path,
				and then the React component that should be loaded
				when that path becomes active in the URL.
				
				Path prop in <Route><Route/>: The path pattern to match against the URL to determine
				if this route matches a URL, link href, or form action.
				
				This is a dynamic path segments by using ':' (colon) in to prop.

				React Router with the overall path for which this page should be loaded,
				This is a dynamic segment, and it takes any value.
				*/}
				<Route path="/product-detail/:productId">
					<ProductDetail />
				</Route>
			</main>
		</div>
	);
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/welcome => Products Component
// our-domain.com/product-detail/<any value>
