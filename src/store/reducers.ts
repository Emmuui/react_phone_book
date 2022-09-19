import {configureStore} from '@reduxjs/toolkit';
import { userSlice } from '../features/auth/redux/user-slice';
import {contactViewSlice} from "../features/contact/redux/contact-view-slice";


export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    contacts: contactViewSlice.reducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  },
});
