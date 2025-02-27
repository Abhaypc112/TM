import axios from "axios";

export const addTask = async (taskData) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos',taskData);
    return res.data;
}
export const getAllTasks = async (userId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    return res.data;
}
export const updateTask = async (taskData) => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${taskData.id}`,taskData);
    console.log(res.data)
    return res.data;
}
export const deleteTask = async (id) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.data;
}