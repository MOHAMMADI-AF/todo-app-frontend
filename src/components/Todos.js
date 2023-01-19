import { getTodos } from "../services/todos-api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Create from "./CreateTodo";

export default function Todos() {
  const nav = useNavigate();
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos() // calling the function to get the data
      .then((res) => setTodos(res.data)); // setting state with returned data
  }, []);
  console.log(todos);
  return (
    <div>
      <Create />
      <div className="toDosList">
        {todos.map((todo) => {
          return (
            <h2 className="toDos">
              <button
                className="fa-button"
                onClick={() => {
                  nav(`/${todo._id}`);
                }}
              >
                <i className="fas fa-link"></i>
              </button>
              {todo.description}
            </h2>
          );
        })}
      </div>
    </div>
  );
}
