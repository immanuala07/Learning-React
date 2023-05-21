import classes from "./TodoItem.module.css";
/*
If in case, the TodoItem is using React.FC then we dont need to pass key on the React.FC,
because it is internally taken care about that
*/
const TodoItem: React.FC<{ text: string, onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
