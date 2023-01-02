import { Route, Switch } from 'react-router-dom';

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
				The <Switch> component is used to render components only when the path will be matched. 
				<Switch> renders the first child <Route> or <Redirect> that matches the location.

				An exact path for a route that is inside a <Switch /> makes sure that
				the route matches exactly the path that is specified.

				Switch component executes either one of the <Route> component,
				instead of executing multiple <Route> components at once or same time.
				*/}
				<Switch>
					<Route path="/welcome">
						<Welcome />
					</Route>

					{/*
					Route is a component that allows us to define a certain path,
					and then the React component that should be loaded
					when that path becomes active in the URL.
					
					Path prop in <Route><Route/>: The path pattern to match against the URL to determine
					if this route matches a URL, link href, or form action.

					'exact' prop in <Route> component 
					When true, will only match if the path matches the location.pathname exactly.
					By using exact prop in route component, we avoid loading both 
					<Products> component and <ProductDetail> component at the same time.

					We are also able to load the below componenrt only whne the url is as below:
					'http://localhost:3000/products'
					
					We are not able to load the below componenrt only whne the url is as below:
					'http://localhost:3000/products/p1'
					*/}
					<Route path="/products" exact>
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
					<Route path="/products/:productId">
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/welcome => Products Component
// our-domain.com/products/<productId>
