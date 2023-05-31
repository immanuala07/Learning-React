import { useState } from 'react';
import { Link } from "react-router-dom";

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost (props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    props.onAddPost(postData);
    props.onCancel();
  };

  return (
    <Modal>
      <form
        className={classes.form}
        onSubmit={submitHandler}
      >
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={bodyChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <div className={classes.actions}>
          <Link
            type="button"
            to='..'
          >
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewPost;
