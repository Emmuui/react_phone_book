import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactInitialState, PhoneContactInterface } from '../ts/contact';
import { FetchContacts} from './thunks';
import { FetchDetailContact } from './thunks';
import {CreateContactThunk} from './thunks';

const INITIAL_STATE: ContactInitialState = {
  contacts: null,
  current_contact: null,
  error: null as null | undefined | string,
  isLoading: false,
};

export const contactViewSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    getContactList: state => {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      FetchContacts.fulfilled,
      (state, action: PayloadAction<Array<PhoneContactInterface>>) => {
        state.isLoading = false;
        state.contacts = action.payload;
      }
    );
    builder.addCase(FetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(FetchDetailContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(FetchDetailContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current_contact = action.payload;
    });
    builder.addCase(FetchDetailContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(CreateContactThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateContactThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current_contact = action.payload;
    });
    builder.addCase(CreateContactThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { getContactList } = contactViewSlice.actions;

export default contactViewSlice.reducer;
