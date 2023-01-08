import { Fragment, useRef, useState } from 'react';

import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    console.log('Form Submitted!');

    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    console.log('Click!');
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    console.log('Focus!');
    setIsEntering(true);
  };

  return (
    <Fragment>
      {/*
			It is used to prompt the user before navigating away from a page.
			When your application enters a state that should prevent the user
			from navigating away (like a form is half-filled out), render a <Prompt>.

			when: (boolean) => Instead of conditionally rendering a <Prompt> behind a guard,
					we can always render it but pass when={true} or when={false}
					to prevent or allow navigation accordingly.

			message: (function) => It will be called with the next location and
					action the user is attempting to navigate to.
					It should always return a string to show a
					prompt to the user or true to allow the transition.
			*/}
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All the entered data will be lost!'
        }
      />

      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusedHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              ref={textInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
