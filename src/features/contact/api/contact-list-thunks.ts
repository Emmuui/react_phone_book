import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneContactInterface } from '../ts/contact';

export const FetchContacts = createAsyncThunk<PhoneContactInterface[], void>(
  'contacts/FetchContacts',
  async function (_, thunkAPI) {
    try {
        const res = await fetch('./phones.json')
        return await res.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
