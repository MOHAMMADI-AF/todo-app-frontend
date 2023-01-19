import { useNavigate } from "react-router-dom";
import { createTodo } from "../services/todos-api";

function Create() {
  const nav = useNavigate();

  const createTheTodo = (e) => {
    const todo = { description: e.target.description.value, complete: false };
    createTodo(todo);
    nav("/");
  };

  return (
    <div>
      <h1>Create a New Todo</h1>
      <div className="createToDo">
        <form onSubmit={createTheTodo}>
          <input type="text" name="description" className="todoInput" />
          <input className="create-button" type="submit" />
        </form>
      </div>
      <h1>All To Do List</h1>
    </div>
  );
}

export default Create;
