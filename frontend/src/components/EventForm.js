import { Form } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  function cancelHandler() {}

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
    */
    <Form method="post" className={classes.form}>
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
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
