import Todo from "../models/Todo";

/*
By using React.FC, we are merging which ever object we are defining here,
with that base object type with children property.

Within the React.FC we are providing the items props with type anotation of Todo class.
*/
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // Accesing the properties from Todo class.
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
