import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactInitialState, PhoneContactInterface } from '../ts/contact';
import { FetchContacts } from '../api/contact-list-thunks';
import { FetchDetailContact } from '../api/contact-detail-thunks';

const INITIAL_STATE: ContactInitialState = {
  contacts: null,
  current_contact: null,
  error: null as null | undefined | string,
  isLoading: false,
};

export const contactListSlice = createSlice({
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
    getCurrentContact: (state, action: PayloadAction<Array<PhoneContactInterface>>) => {
      const currentContact = action.payload.find(
        current_contact => current_contact.id === state.current_contact?.id
      );
      return {
        ...state,
        current_contact: currentContact
          ? ({
              ...state.current_contact,
            } as PhoneContactInterface)
          : state.current_contact,
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
  },
});

export const { getContactList } = contactListSlice.actions;

export default contactListSlice.reducer;
