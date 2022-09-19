import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneContactInterface } from '../ts/contact';
import {RootState} from "src/store";

export const FetchContacts = createAsyncThunk<PhoneContactInterface[], void>(
  'contacts/FetchContacts',
  async function (_, thunkAPI) {
    try {
        const res = await fetch('/phones.json')
        return await res.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const FetchDetailContact = createAsyncThunk<
    PhoneContactInterface,
    string,
    { state: RootState }
    >('contacts/FetchDetailContact', async (contactId, thunkAPI) => {
    try {
        const res = await fetch('/phones.json')
        const data: PhoneContactInterface[] = await res.json()
        return data.find(contact => contact.id == contactId) as PhoneContactInterface;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
