import Post from './Post.jsx';
import classes from "./PostsList.module.css";

function PostsList(props) {
  return (
    // <li className={classes.posts}>
    //   dsdsds
    //   <p>{props.title}</p>
    //   <p>{props.body}</p>
    // </li>
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
  );
}

export default PostsList;
