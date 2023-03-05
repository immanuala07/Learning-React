import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  json,
  redirect
} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm ({ method, event }) {
  /*
  This hook provides the returned value from the previous navigation's action result,
  or undefined if there was no submission.
  The most common use-case for this hook is form validation errors.
  useActionData() return the action function data.
  */
  const data = useActionData();

  // The useNavigate hook returns a function that lets you navigate programmatically.
  const navigate = useNavigate();

  /*
  useNavigation() - This hook tells you everything you need to know about a page navigation
  to build pending navigation indicators and optimistic UI on data mutations.

  Things like:
  Global loading indicators
  Disabling forms while a mutation is happening
  Adding busy indicators to submit buttons
  Optimistically showing a new record while it's being created on the server
  Optimistically showing the new state of a record while it's being updated
  */
  const navigation = useNavigation();

  /*
  navigation.state
  idle - There is no navigation pending.
  submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
  loading - The loaders for the next routes are being called to render the next page

  Normal navigations and GET form submissions transition through these states:
  idle → loading → idle

  Form submissions with POST, PUT, PATCH, or DELETE transition through these states:
  idle → submitting → loading → idle
  */
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    // Below, we go back a step in history stack and is equivalent to hitting the back button.
    navigate("..");
  }

  return (
    /*
    The Form component is a wrapper around a plain HTML form that
    emulates the browser for client side routing and data mutations.
    It is not a form validation/state management library
    like you might be used to in the React ecosystem

    Note: Make sure our input tags have name prop
    or else the FormData will not include that field's value.

    method prop in <Form> - This determines the HTTP verb to be used.
    The same as plain HTML form method, except it also supports "put", "patch", and "delete"
    in addition to "get" and "post".
    The default is "get".

    method value is set dynamically in EditEvent.js and NewEvent.js
    */
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {/* Object.values() returns an array. */}
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={cancelHandler}
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;

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

  let url = "http://localhost:8080/events";

  if (method === 'PATCH') {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: method,
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

  return redirect("/events");
}
