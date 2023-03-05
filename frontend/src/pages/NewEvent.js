import { json, redirect } from 'react-router-dom';

import EventForm from '../components/EventForm';

const NewEventPage = () => {
	return <EventForm />;
};

export default NewEventPage;

export async function action ({ request, params }) {
	/*
	When the user submits the form,
	React Router will match the action to the app's routes
	and call the <Route action> with the serialized FormData.
	
	When the action completes,
	all of the loader data on the page will automatically revalidate
	to keep your UI in sync with your data.
	*/
	const data = await request.formData();

	const eventData = {
		title: data.get("title"),
		image: data.get("image"),
		date: data.get("date"),
		description: data.get("description")
	};

	const response = await fetch("http://localhost:8080/events", {
		method: "POST",
		/*
		Headers - Represents response/request headers,
		allowing you to query them and take different actions
		depending on the results.
		*/
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(eventData)
	});

	// Capture the backened or server error code and return the response.
	if (response.status === 422) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: "Could not save event" }, { status: 500 });
	}
	
	return redirect('/events');
}
