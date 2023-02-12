import { useParams } from "react-router-dom";

const EventDetailPage = () => {
	const param = useParams();

	return (
		<>
			<h1>EventDetailPage</h1>
			<p>Event ID : {param.eventId}</p>
		</>
	);
};

export default EventDetailPage;
