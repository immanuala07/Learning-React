import './App.css';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App () {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn Redux"),
    new Todo("Learn TypeScript")
  ];

  return (
    <div>
      {/* Passing an array of Todo class objects */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
