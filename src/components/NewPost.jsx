import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost (props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={props.onBodyChange}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={props.onAuthorChange}
        />
      </p>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
