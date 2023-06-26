import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "./reduser";

export const store =configureStore({
    reducer:{
        todo:todoReducer
    },
    middleware:[thunk]
})