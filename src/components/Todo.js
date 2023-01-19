import { useState, useEffect } from "react";
import { getTodo, removeTodo } from "../services/todos-api";
import { useParams, useNavigate } from "react-router-dom";

export default function Todo() {
  const nav = useNavigate(); // setting up our return to main page
  const { id } = useParams(); // destructuring the id parameter for use
  const [todo, setTodo] = useState({}); // setting up our state
  useEffect(() => {
    getTodo(id) //getting the one ToDo from the api using the id
      .then((res) => setTodo(res.data));
  }, []);

  const deleteTheTodo = () => {
    removeTodo(id);
    nav("/");
  };

  return (
    <div>
      <h1>Todo</h1>
      <h4>Edit, Mark as Completed or Delete a To Do</h4>
      <div className="toDoContainer">
        <div className="toDo-text">
          <h2>{todo.description}</h2>
        </div>
        <div className="toDo-functions">
          <h2 className="toDoList">
            <button
              className="fa-button"
              onClick={() => {
                nav(`/${id}/edit`);
              }}
            >
              <i className="fas fa-edit"></i>
            </button>

            <button className="fa-button" onClick={deleteTheTodo}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </h2>
        </div>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            nav("/");
          }}
        >
          Back To List
        </button>
      </div>
    </div>
  );
}
