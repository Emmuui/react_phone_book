import { createSlice } from "@reduxjs/toolkit";
import {fetchUser} from "./thunks";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null as null | string,
        loggedIn: false,
        isLoading: false,
        error: null as null | undefined | string,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.email;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            state.loggedIn = false;
        },
     },
    extraReducers:(builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
            state.isLoading = false;
        })
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});


export const {login, logout} = userSlice.actions;
export const selectUser = (state: any) => state.user.user;
