import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App () {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn Redux"),
    new Todo("Learn TypeScript")
  ];

  const addTodoHandler = (todoText: string) => {
    console.log(todoText);
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
