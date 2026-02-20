import { useState } from "react";
import { createTodo } from "../api/todoService";
import { toast } from "react-toastify";

const CreateTodo = ({onTodoCreated}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createTodo({ title });
      toast.success("Todo Added");
      setTitle("");
      if(onTodoCreated){
        onTodoCreated();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
