import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
	/*
	This hook makes the data at any currently rendered route available anywhere in the tree.
	This is useful for components deep in the tree needing data from routes much farther up,
	as well as parent routes needing the data of child routes deeper in the tree.

	React Router stores data internally with deterministic, auto-generated route ids,
	but you can supply your own route id to make this hook much easier to work with.
	*/
	const data = useRouteLoaderData('event-detail');

	return <EventItem event={data.event} />;
};

export default EventDetailPage;

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

	const response = await fetch('http://localhost:8080/events/' + id);

	if (!response.ok) {
		throw json(
			{ message: 'Could not fetch details for selected event.' },
			{ status: 500 }
		);
	} else {
		return response;
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
