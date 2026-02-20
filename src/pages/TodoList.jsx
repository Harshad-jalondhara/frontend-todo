import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../api/todoService";
import { toast } from "react-toastify";

const TodoList = ({todos, fetchTodos}) => {
    const navigate = useNavigate();

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos])

    const handleDelete = async(id) => {
        try {
            await deleteTodo(id);
            toast.success("Todo Deleted");
            fetchTodos();
        } catch (error) {
            toast.error("Delete Failed");
        }

    }
  return (
    <div className="w-full max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Todo List</h2>
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="flex items-center justify-between p-2 border border-gray-200 rounded-md"
          >
            <span className="text-gray-700">{todo.title}</span>
            <div className="flex gap-2">
              <button
                onClick={() => navigate(`/edit/${todo._id}`)}
                className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo._id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList