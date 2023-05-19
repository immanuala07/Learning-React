// Data model for todo
class Todo{
  id: string;
  text: string;

  constructor(todoTest: string) {
    this.text = todoTest;
    this.id = new Date().toISOString() + Math.random();
    
  }
}

export default Todo;
