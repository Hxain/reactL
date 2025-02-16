import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../features/reduxTodo/reduxTodoSlice";

export const reduxStore = configureStore({
    reducer:todoReducer
})