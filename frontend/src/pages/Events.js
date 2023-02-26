import { json, useLoaderData } from 'react-router-dom';

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
	const data = useLoaderData();
	const events = data.events;

	// if (data.isError) {
	// 	return <p>{data.events}</p>;
	// }

	return <EventsList events={events} />;
}

export default EventsPage;

/*
Loader function can be moved from App.js to Event.js
This function is exported here and imported in App.js
This makes the App.js makes the component leaner
*/
export const loader = async () => {
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
		// Loader function can return any kind of data in the function.
		return response;
	}
};
