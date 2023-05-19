import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

/*
By using React.FC, we are merging which ever object we are defining here,
with that base object type with children property.

Within the React.FC we are providing the items props with type anotation of Todo class.
*/
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        /*
        Accesing the properties from Todo class.
        
        If in case, the TodoItem is using React.FC then we dont need to pass key on the React.FC,
        because it is internally taken care about that
        */
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
