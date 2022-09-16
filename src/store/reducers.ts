import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/auth/redux/user-slice';
import {contactListSlice} from "../features/contact/redux/contact-list-slice";

export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    contacts: contactListSlice.reducer,
  },
});
