import { Routes, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";
import EditTodo from "./pages/EditTodo";
import { ToastContainer } from "react-toastify";
import { getAllTodos } from "./api/todoService";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await getAllTodos();
    setTodos(response.data.data);
  };
  
  useEffect(() => {
    fetchTodos();
  }, []);
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CreateTodo onTodoCreated={fetchTodos}/>
              <TodoList todos={todos} fetchTodos={fetchTodos}/>
            </>
          }
        />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
