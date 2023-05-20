import { useRef } from "react";
import classes from "./NewTodo.module.css";

// Adding TypeScript generic with prop that has function
// When a prop has a function we define a function with parameter and return value in the TypeScript generics.
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  /*
  Below we are letting know the typescript that useRef returns HTMLInputElement
  and setting the intial value for useRef as null.
  */
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  /*
  In the function parameter, there is type annotation as React FormEvent
  because there is sumbit event happening on the html form tag so,
  we are using React FormEvent as type annotation.

  If in case, the form have a mouse event then
  we will use React MouseEvent as type annotation within the function parameter.
  */
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // !. - Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    // Calling the function from the parent component
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input 
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
