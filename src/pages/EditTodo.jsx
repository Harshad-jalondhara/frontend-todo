import { useEffect, useState } from "react";
import { updateTodo, getTodoById } from "../api/todoService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async() => {
    try {
      const response = await getTodoById(id);
      setTitle(response.data.data.title);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(id, { title });
      toast.success("Todo Updated");
      navigate("/");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Edit Todo</h2>
        <form onSubmit={handleUpdate} className="flex gap-2">
          <input
            type="text"
            placeholder="Update todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
