import { getTodo, editTodo } from "../services/todos-api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTodo() {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getTodo(id) // getting the todo that matches this id
      .then((res) => setData(res.data));
  }, []);

  const editTheTodo = (e) => {
    e.preventDefault();
    const updatedTodo = {
      description: e.target.description.value,
      complete: e.target.complete.checked,
    };
    editTodo(id, updatedTodo);
    nav(`/${id}`);
  };
  return (
    <div>
      <h1>Edit To Do</h1>
      <div className="editToDo">
        <form onSubmit={editTheTodo}>
          <input
            className="editInput"
            type="text"
            name="description"
            defaultValue={data.description}
          />
          <input
            className="complete-check"
            type="checkbox"
            name="complete"
            defaultChecked={data.complete}
          />
          <input className="edit-button" type="submit" />
        </form>
      </div>
    </div>
  );
}
