import React, { useState } from "react";

import Todo from "../models/Todo";

// Type Aliasing
type TodoContextObj = {
  items: Todo[];
  addTodo: (text:string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => { },
  removeTodo: (id: string) => { },
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
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
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      // Removing a todo
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
}; 

export default TodosContextProvider;
