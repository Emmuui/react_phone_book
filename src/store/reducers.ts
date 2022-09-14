import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/auth/redux/user-slice';
import {contactSlice} from "../features/contact/redux/contact-slice";

export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    contacts: contactSlice.reducer,
  },
});
