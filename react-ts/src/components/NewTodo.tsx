const NewTodo = () => {
  /*
  In the function parameter, there is type annotation as React FormEvent
  because there is sumbit event happening on the html form tag so,
  we are using React FormEvent as type annotation.

  If in case, the form have a mouse event then
  we will use React MouseEvent as type annotation within the function parameter.
  */
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text"/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
