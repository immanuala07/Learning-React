import { Suspense } from 'react';
import { json, useLoaderData,defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
	/*
	This hook provides the value returned from your route loader.

	The loader function in the route definition if it returns a promise.
	React Router will actually check if a promise is returned
	and automatically get the resolved data from that promise for you.

	 
	After route actions are called,
	the data will be revalidated automatically
	and return the latest result from your loader.
	
	Note that useLoaderData does not initiate a fetch.
	It simply reads the result of a fetch React Router manages internally,
	so you don't need to worry about it refetching
	when it re-renders for reasons outside of routing.
	
	This also means data returned is stable between renders,
	so you can safely pass it to dependency arrays in React hooks like useEffect.
	It only changes when the loader is called again after actions or certain navigations.
	In these cases the identity will change (even if the values don't).
	
	You can use this hook in any component or any custom hook,
	not just the Route element.
	It will return the data from the nearest route on context.
	*/
	const {events} = useLoaderData();

	// if (data.isError) {
	// 	return <p>{data.events}</p>;
	// }

	return (

		/*
		Suspense is a feature for managing asynchronous operations in a React app.
		It lets your components communicate to React that they’re waiting for some data.

		It simply lets you render a fallback declaratively
		while a component is waiting for some asynchronous operation
		(i.e., a network request) to be completed.


		<Suspense> component that lets you “wait” for some code to load
		and declaratively specify a loading state (like a spinner) while we’re waiting.

		<Suspense> - lets you display a fallback until its children have finished loading.

				<Suspense fallback={<Loading />}>
					<SomeComponent />
				</Suspense>
		*/
		<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>

			{/*
			Imagine a scenario where one of your routes' loaders needs to retrieve some data
			that for one reason or another is quite slow.

			<Await> - Used to render deferred values with automatic error handling.
			Make sure to review the Deferred Data Guide
			since there are a few APIs that work together with this component.

			Note: <Await> expects to be rendered inside of a <React.Suspense>
			or <React.SuspenseList> parent to enable the fallback UI.


			{children} of <Await> Component - Can either be React elements or a function.
			When using a function, the value is provided as the only parameter.


			resolve - Takes a promise returned from a
			deferred loader value to be resolved and rendered.
			*/}
			<Await resolve={events}>

				{/*
				{children} of <Await> Component - Can either be React elements or a function.
				When using a function, the value is provided as the only parameter.
				*/}
				{(loadedEvents) => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	);
}

export default EventsPage;

export const loadEvents = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events.' };

		// throw { message: 'Could not fetch events.' }; // eslint-disable-line no-throw-literal

		// throw new Response(
		// 	/*
		// 	The Response() constructor creates a new Response object.
		// 	status - The status code for the response, e.g., 200.
		// 	data - An object defining a body for the response.
		// 	*/
		// 	JSON.stringify({ message: 'Could not fetch events.' }),
		// 	{ status: 500 }
		// );

		/*
		A shortcut for :-

		new Response(JSON.stringify(someValue), {
			headers: {
				"Content-Type": "application/json; utf-8",
			},
		});

		This is shortcut for Response object so we use the json() function in loaders function of react router.
		*/
		throw json({ message: 'Could not fetch events.' }, { status: 500 });
	} else {
		/*
		Since we are using defer to invoke this function,
		so we have to extract the json() from response (response.json())
		and send the exact data.
		*/
		const resData = await response.json();

		return resData.events;
	}
};


/*
Loader function can be moved from App.js to Event.js
This function is exported here and imported in App.js
This makes the App.js makes the component leaner
*/
export const loader = () => {

	/*
	This utility allows you to defer values returned from loaders
	by passing PROMISES instead of RESOLVED values.
	*/
	return defer({

		// Calling a function which returns a promise
		events: loadEvents()
	});
};
