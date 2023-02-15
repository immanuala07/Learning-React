import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EditEvent from "./pages/EditEvent";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import RootLayout from './pages/Root';
import EventRootLayout from './pages/EventRootLayout';

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePagePreview.jsPreview.jsPreview.jsPreview.jsPreview.js
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			// Nested Route using object within the children array
			{
				path: 'events',
				element: <EventRootLayout />,
				children: [
					{
						index: true,
						element: <Events />,
						/*
						In route component, loader props is added.
						Each route can define a "loader" function to provide
						data to the route element before the compoenent renders.

						As the user navigates around the app,
						the loaders for the next matching branch of routes
						will be called in parallel and their data made
						available to components through useLoaderData.
						*/
						loader: async () => {
							const response = await fetch(
								'http://localhost:8080/events'
							);

							if (!response.ok) {
								// ...
							} else {
								const resData = await response.json();
								return resData.events;
							}
						}
					},
					{ path: ':eventId', element: <EventDetail /> },
					{ path: 'new', element: <NewEvent /> },
					{ path: ':eventId/edit', element: <EditEvent /> }
				]
			}
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
