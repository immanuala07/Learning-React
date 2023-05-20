import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App () {
  /*
  Without using the Generic in the useState hook,
  todos variable will be of TypeScript never datatype
  So we use the TypeScript Generic,
  to make the TypeScript knows that todo vairable holds the values of Todo class object values in TypeScript.
  */
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    // Creating a new todo using the todo text entered by user.
    const newTodo = new Todo(todoText);
    
    setTodos((prevTodos) => {
      // Creating a array by merging both previous todos and current todo
      return prevTodos.concat(newTodo);
    })
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      {/* Passing an array of Todo class objects */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
