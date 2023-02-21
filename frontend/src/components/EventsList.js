// import { useLoaderData } from 'react-router-dom';

import classes from './EventsList.module.css';

function EventsList({ events }) {
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
	// const events = useLoaderData();

	return (
		<div className={classes.events}>
			<h1>All Events</h1>
			<ul className={classes.list}>
				{events.map((event) => (
					<li key={event.id} className={classes.item}>
						<a href="...">
							<img src={event.image} alt={event.title} />
							<div className={classes.content}>
								<h2>{event.title}</h2>
								<time>{event.date}</time>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default EventsList;
