import { Link, useSubmit } from 'react-router-dom';

import classes from './EventItem.module.css';

function EventItem ({ event }) {
  /*
  The imperative version of <Form> that lets you,
  the programmer, submit a form instead of the user.

  This is used to trigger the action method defined in EventDetail.js
  and also deifned in route definition of EventDetail.js 
  */
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
		/*
    This is used to trigger the action method defined in EventDetail.js
    and also deifned in route definition of EventDetail.js 

    The first argument can be different values as object or
    we can submit any form input element or formData (request.formData()).

    The second argument is a set of options that map
    directly to form submission attributes like action and method
    */
		submit(null, { method: "delete" });
	}
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        {/*
        Since the button is not a submit type and
        we cannot do the window.confirm("Are you sure?") and it wont be invoked,
        if we add the <Form> component of react router.
        */}
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
