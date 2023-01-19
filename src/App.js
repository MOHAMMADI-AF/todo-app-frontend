import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EditTodo from "./components/EditTodo";
import Todo from "./components/Todo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">React To Do App</header>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/:id" element={<Todo />} />
            <Route path="/:id/edit" element={<EditTodo />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
