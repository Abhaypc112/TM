import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import *as taskService from '../services/taskService'
import { toast } from 'react-toastify';

const userId = JSON.parse(localStorage.getItem("userId"))

export const addTask = createAsyncThunk('add/task',async(taskData)=>{
   try{
    const res = await taskService.addTask({...taskData,userId});
    return res;
   }catch(error){
    console.log(error)
   }
})
export const getAllTasks = createAsyncThunk('api/data',async({page,limit})=>{
   try{
    const res = await taskService.getAllTasks({userId,page,limit});
    return res;
   }catch(error){
    console.log(error)
   }
})
export const updateTask = createAsyncThunk('todos/{id}',async(taskData)=>{
   try{
    const res = await taskService.updateTask(taskData);
    return res;
   }catch(error){
    console.log(error)
   }
})
export const deleteTask = createAsyncThunk('todos/deleteTask',async(id)=>{
   try{
    const res = await taskService.deleteTask(id);
    return {res,id};
   }catch(error){
    console.log(error)
   }
})


const initialState = {
    tasks:[],
    loading:false,
    error:null
}
const handleTaskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
// Add Task
        .addCase(addTask.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addTask.fulfilled,(state,action) => {
            state.tasks.unshift(action.payload);
            state.loading = false;
            state.error = null;
            toast.success("Task added successfully!");
        })
        .addCase(addTask.rejected,(state) => {
            state.error = action.payload;
            state.loading = false;
        })
// Get All Tasks
        .addCase(getAllTasks.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllTasks.fulfilled,(state,action) => {
            state.tasks = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(getAllTasks.rejected,(state) => {
            state.error = action.payload;
            state.loading = false;
        })
// Update Task
        .addCase(updateTask.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateTask.fulfilled,(state,action) => {
            const {id} = action.payload;
            const index = state.tasks.findIndex((value)=>value.id === id)
            state.tasks[index] = action.payload;
            state.loading = false;
            state.error = null;
            toast.success("Task updated successfully!");
        })
        .addCase(updateTask.rejected,(state) => {
            state.error = action.payload;
            state.loading = false;
        })
// Delete Task
        .addCase(deleteTask.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
            const { id } = action.payload;
            state.tasks = state.tasks.filter((task) => task.id !== id);
            state.loading = false;
            state.error = null;
            toast.success("Task delete successfully!");
        })
        .addCase(deleteTask.rejected,(state) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export default handleTaskSlice.reducer;