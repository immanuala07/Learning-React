import Post from './Post.jsx';
import NewPost from './NewPost.jsx';
import classes from "./PostsList.module.css";
import Modal from './Modal.jsx';
import { useState } from 'react';

function PostsList ({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]);
  
  function addPostHandler (postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
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
