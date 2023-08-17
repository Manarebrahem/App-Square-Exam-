import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";

export const store = configureStore({
    reducer:{
        jobs:jobReducer
    }
})