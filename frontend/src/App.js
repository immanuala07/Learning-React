import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, { action as authAction } from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { checkAuthLoader, tokenLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',

    // The below loader is used to check whether,
    // the user is logged in or logged out in all scenarios.
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                /*
                Adding route protection with loader function
                where this route is not acccessible without token or login
                */
                loader: checkAuthLoader
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            /*
            Adding route protection with loader function
            where this route is not acccessible without token or login
            */
            loader: checkAuthLoader
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
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
        action: authAction
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        // For logout route we dont need the element property.
        path: 'logout',
        action: logoutAction
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
