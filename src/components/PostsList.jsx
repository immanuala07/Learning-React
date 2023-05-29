import Post from './Post.jsx';
import NewPost from './NewPost.jsx';
import classes from "./PostsList.module.css";

function PostsList(props) {
  return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
      <Post
        author="Immanual"
        body="React.js is awesome!"
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
