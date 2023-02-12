import { Link } from "react-router-dom";

const EVENTS = [
	{ id: 'e1', title: 'Event 1' },
	{ id: 'e2', title: 'Event 2' },
	{ id: 'e3', title: 'Event 3' },
	{ id: 'e4', title: 'Event 4' },
	{ id: 'e5', title: 'Event 5' }
];

const EventsPage = () => {
	return (
		<>
			<h1>EventsPage</h1>
			<ul>
				{EVENTS.map((et) => {
					return (
						<li key={et.id}>
							{/* Relative path  */}
							<Link to={et.id}>{et.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default EventsPage;
