import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EditEvent from "./pages/EditEvent";
import EventDetail, {
	loader as eventDetailLoader,
	action as deleteEventAction
} from "./pages/EventDetail";
import Events, { loader as eventsLoader } from "./pages/Events";
import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import RootLayout from './pages/Root';
import EventRootLayout from './pages/EventRootLayout';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

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
		// If any error occured in the root component or child route the error bubbles up to the below error element
		errorElement: <ErrorPage />,
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
						loader: eventsLoader
					},
					{
						path: ':eventId',
						id: 'event-detail',
						/*
						In route component, loader props is added.
						Each route can define a "loader" function to provide
						data to the route element before the compoenent renders.

						As the user navigates around the app,
						the loaders for the next matching branch of routes
						will be called in parallel and their data made
						available to components through useLoaderData.
						
						We can also use the nested routes feature
						not just to use a wrapper layout component
						but also to use a shared loader function.

						Now we can access loader data with useLoaderData() hook provided
						by React router in any component that's on the same level or a lower level
						than the route where the loader is added to.
						So with that, this loader will execute
						whenever we visit this or this route.
						And this allows us to reuse the logic
						and data of that loader in both these routes down here in children.
						*/
						loader: eventDetailLoader,
						children: [
							{
								/*
								We can also use the nested routes feature
								not just to use a wrapper layout component
								but also to use a shared loader function.
								*/
								index: true,
								element: <EventDetail />,
								action: deleteEventAction
							},
							{
								/*
								We can also use the nested routes feature
								not just to use a wrapper layout component
								but also to use a shared loader function.
								*/
								path: 'edit',
								element: <EditEvent />,
								/*
								The url to which the form will be submitted,
								just like HTML form action.
								
								The only difference is the default action.
								With HTML forms, it defaults to the full URL.
								
								With React Router <Form>,
								it defaults to the relative URL of the closest route in context.

								When the user submits the form,
								React Router will match the action to the app's routes
								and call the <Route action> with the serialized FormData.
								
								When the action completes,
								all of the loader data on the page will automatically revalidate
								to keep your UI in sync with your data.
								*/
								action: manipulateEventAction
							}
						]
					},
					{
						path: "new",
						element: <NewEvent />,
						/*
						The url to which the form will be submitted,
						just like HTML form action.
						
						The only difference is the default action.
						With HTML forms, it defaults to the full URL.
						
						With React Router <Form>,
						it defaults to the relative URL of the closest route in context.

						When the user submits the form,
						React Router will match the action to the app's routes
						and call the <Route action> with the serialized FormData.
						
						When the action completes,
						all of the loader data on the page will automatically revalidate
						to keep your UI in sync with your data.
						*/
						action: manipulateEventAction
					}
				]
			},
			{
				path: "newsletter",
				element: <NewsletterPage />,
				action: newsletterAction
			}
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
