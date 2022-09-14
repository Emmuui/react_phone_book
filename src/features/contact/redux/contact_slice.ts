import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactInitialState, PhoneContactInterface } from '../ts/contact';
import { FetchContacts } from './thunks';


const INITIAL_STATE: ContactInitialState = {
  contacts: [],
  isLoading: false,
  errors: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    getContactList: state => {
      return {
        ...state,
        isLoading: false,
        errors: null
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
  },
});

export const {
  getContactList,
} = contactSlice.actions;

export default contactSlice.reducer;
