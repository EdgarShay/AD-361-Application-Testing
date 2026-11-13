export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// Creates a new todo with the given text.
// Statement coverage: no branches, so one call runs every line.
export function createTodo(text: string): Todo {
  return { id: Date.now(), text, done: false };
}

// Adds a todo to the list if the text is not empty.
// Branch coverage: one if, two outcomes.
export function addTodo(todos: Todo[], text: string): Todo[] {
  const trimmed = text.trim();
  if (!trimmed) {
    return todos;
  }
  return [...todos, createTodo(trimmed)];
}

// Counts the number of completed todos.
// Loop coverage: test with 0, 1, and several todos.
export function countDone(todos: Todo[]): number {
  let count = 0;
  for (const todo of todos) {
    if (todo.done) {
      count++;
    }
  }
  return count;
}
