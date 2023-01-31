import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';

import HomePage from './pages/Home';
import ProductPage from './pages/Product';

/*
createRoutesFromElements() is a helper that creates route objects from <Route> elements.
It's useful if you prefer to create your routes as JSX instead of objects.

It's also used internally by <Routes> to generate a route objects from its <Route> children.
*/
const routerDefinitions = createRoutesFromElements(
	<Route>
		<Route path="/" element={<HomePage />} />
		<Route path="/products" element={<ProductPage />} />
	</Route>
);

/*
createBrowserRouter() - This is the recommended router for all React Router web projects.
It uses the DOM History API to update the URL and manage the history stack.

It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
It also takes an array of route objects as parameter.
*/
const router = createBrowserRouter(routerDefinitions);

/*
const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/products', element: <ProductPage /> }
]);
*/

function App() {
	/*
	A <BrowserRouter> stores the current location in the browser's address bar using clean URLs
	and navigates using the browser's built-in history stack.
	
	<BrowserRouter window> defaults to using the current document's defaultView,
	but it may also be used to track changes to another window's URL, in an <iframe>
	*/
	return <RouterProvider router={router} />;
}

export default App;
