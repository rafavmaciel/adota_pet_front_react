import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        count: 0,
        user: userReducer,
    },
});