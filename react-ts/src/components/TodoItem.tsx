import classes from "./TodoItem.module.css";
/*
If in case, the TodoItem is using React.FC then we dont need to pass key on the React.FC,
because it is internally taken care about that
*/
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
