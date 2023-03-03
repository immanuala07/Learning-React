import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
	/*
	This hook makes the data at any currently rendered route available anywhere in the tree.
	This is useful for components deep in the tree needing data from routes much farther up,
	as well as parent routes needing the data of child routes deeper in the tree.

	React Router stores data internally with deterministic, auto-generated route ids,
	but you can supply your own route id to make this hook much easier to work with.
	*/
	const data = useRouteLoaderData('event-detail');

	return <EventForm event={data.event} />;
};

export default EditEventPage;
