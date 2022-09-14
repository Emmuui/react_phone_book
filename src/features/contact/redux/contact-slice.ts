import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactInitialState, PhoneContactInterface } from '../ts/contact';
import { FetchContacts } from './thunks';
import {fetchUser} from "../../auth/redux/thunks";


const INITIAL_STATE: ContactInitialState = {
  contacts: null,
  error: null,
  isLoading: false,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    getContactList: state => {
      return {
        ...state,
        isLoading: false,
        error: null
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(FetchContacts.fulfilled, (state, action: PayloadAction<Array<PhoneContactInterface>>) => {
      state.isLoading = false;
      state.contacts = action.payload;
    });
    // builder.addCase(FetchContacts.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const {
  getContactList,
} = contactSlice.actions;

export default contactSlice.reducer;
