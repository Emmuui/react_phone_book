import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "../features/auth/redux/user-slice";



export const store = configureStore({
    reducer: {
        auth: userSlice.reducer,
    },
});


export const portalDispatch = store.dispatch;
