import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const createTodo = (todoData) => {
    return API.post("/create", todoData)
}

export const getAllTodos = () => {
    return API.get("/getAll");
}

export const updateTodo = (id, todoData) => {
    return API.put(`/update/${id}`, todoData);
}

export const getTodoById = (id) => {
    return API.get(`/get/${id}`);
}

export const deleteTodo = (id) => {
    return API.delete(`/delete/${id}`);
}