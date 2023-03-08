import { Suspense } from "react";
import { useRouteLoaderData, json, redirect, Await, defer } from "react-router-dom";

import EventItem from '../components/EventItem';
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
	/*
	This hook makes the data at any currently rendered route available anywhere in the tree.
	This is useful for components deep in the tree needing data from routes much farther up,
	as well as parent routes needing the data of child routes deeper in the tree.

	React Router stores data internally with deterministic, auto-generated route ids,
	but you can supply your own route id to make this hook much easier to work with.
	*/
	const {event,events} = useRouteLoaderData('event-detail');

	return (
		<>
			{/* We have a individual <Suspense> component to every <Await> component */}
			<Suspense
				fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
			>
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
				<Await resolve={event}>
					{/*
					{children} of <Await> Component - Can either be React elements or a function.
					When using a function, the value is provided as the only parameter.
					*/}
					{(loadedEvent) => <EventItem event={loadedEvent} />}
				</Await>
      </Suspense>
      
			{/* We have a individual <Suspense> component to every <Await> component */}
			<Suspense
				fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
			>
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
		</>
	);
};

export default EventDetailPage;

async function loadEvent (id) {
	const response = await fetch('http://localhost:8080/events/' + id);

	if (!response.ok) {
		throw json(
			{ message: 'Could not fetch details for selected event.' },
			{ status: 500 }
		);
	} else {
		/*
		Since we are using defer to invoke this function,
		so we have to extract the json() from response (response.json())
		and send the exact data.
		*/
		const resData = await response.json();

		return resData.event;
	}
}

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
request - This is a Fetch Request instance being made to your application.
					React Router sends the request to your loaders.
					function loader({ request }) {}
		
params - Route params are parsed from dynamic segments and passed to your loader.
				This is useful for figuring out which resource to load:
				createBrowserRouter([
					{
						path: "/teams/:teamId",
						loader: ({ params }) => {
							return fakeGetTeam(params.teamId);
						},
					},
				]);
				Note that the :teamId in the path is parsed as provided as params.teamId by the same name.
*/
export const loader = async ({ request, params }) => {
	const id = params.eventId;
  return defer({
		/*
    THe code is an example how to get multiple backend or http request in a page.

    We make sure the loadEvent() data is ready before the page loads,
    So that loadEvent() data can fetch data once after the page loaded.
    */
		event: await loadEvent(id),
		events: loadEvents()
  });
};

/*
request - This is a Fetch Request instance being made to your application.
					React Router sends the request to your loaders.
					function loader({ request }) {}
		
params - Route params are parsed from dynamic segments and passed to your loader.
				This is useful for figuring out which resource to load:
				createBrowserRouter([
					{
						path: "/teams/:teamId",
						loader: ({ params }) => {
							return fakeGetTeam(params.teamId);
						},
					},
				]);
				Note that the :teamId in the path is parsed as provided as params.teamId by the same name.
*/
export const action = async ({ request, params }) => {
	const eventId = params.eventId;

	const response = await fetch("http://localhost:8080/events/" + eventId, {
		method: request.method
	});

	if (!response.ok) {
		throw json(
			{ message: "Could not delete event." },
			{ status: 500 }
		);
	}
	
	return redirect('/events');
};
