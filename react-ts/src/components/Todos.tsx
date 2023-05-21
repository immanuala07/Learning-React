import React, { useContext } from 'react';
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from '../store/todos-context';

/*
By using React.FC, we are merging which ever object we are defining here,
with that base object type with children property.

Within the React.FC we are providing the items props with type anotation of Todo class.
*/
const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        /*
        Accesing the properties from Todo class.
        
        If in case, the TodoItem is using React.FC then we dont need to pass key on the React.FC,
        because it is internally taken care about that
        */
        <TodoItem
          key={item.id}
          text={item.text}
          // JS bind function is used to preconfigure a function for future execution.
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
