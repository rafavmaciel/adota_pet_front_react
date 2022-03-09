import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        isLoggedIn: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        changeUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.name = "";
            state.email = "";
            state.isLoggedIn = false;
        },
    },
});

export const { changeUser, logout } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;

    