import Post from './Post.jsx';
import NewPost from './NewPost.jsx';
import classes from "./PostsList.module.css";
import Modal from './Modal.jsx';
import { useState } from 'react';

function PostsList (props) {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const hideModalHandler = () => {
    setModalIsVisible(false)
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post
          author={enteredAuthor}
          body={enteredBody}
        />
        <Post
          author="Imman"
          body="Check out the full course!"
        />
      </ul>
    </>
  );
}

export default PostsList;
