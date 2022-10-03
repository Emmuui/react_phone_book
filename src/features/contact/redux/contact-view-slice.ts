import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactInitialState, PhoneContactInterface } from '../ts/contact';
import {
  deleteContactThunk,
  fetchContacts,
  updateContactThunk,
  fetchDetailContact,
  createContactThunk,
} from './thunks';

const INITIAL_STATE: ContactInitialState = {
  contacts: [],
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
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchContacts.fulfilled,
      (state, action: PayloadAction<Array<PhoneContactInterface>>) => {
        state.isLoading = false;
        state.contacts = action.payload;
      }
    );
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchDetailContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetailContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current_contact = action.payload;
    });
    builder.addCase(fetchDetailContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(createContactThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createContactThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current_contact = action.payload;
      state.contacts = [action.payload, ...state.contacts];
    });
    builder.addCase(createContactThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateContactThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateContactThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current_contact =
        state.current_contact?.id === action.payload.id ? action.payload : state.current_contact;
      state.contacts = state.contacts.map(content =>
        content.id === action.payload.id ? action.payload : content
      );
    });
    builder.addCase(updateContactThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteContactThunk.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(contacts => contacts.id != action.payload.id)
    });
  },
});
