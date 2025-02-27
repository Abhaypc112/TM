import { configureStore } from "@reduxjs/toolkit";
import handleTaskSlice from './taskHandleSlice'

const store = configureStore({
    reducer:{
        tasks:handleTaskSlice
    }
});

export default store;