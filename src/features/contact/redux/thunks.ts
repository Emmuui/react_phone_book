import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneContactInterface } from '../ts/contact';

export const FetchContacts = createAsyncThunk<PhoneContactInterface[], PhoneContactInterface[]>(
  'contacts/getContacts',
  async function (data, thunkAPI) {
    try {
      await fetch('../ts/phones.json')
        .then(data => data.json())
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
