import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { PhoneContactInterface } from '../ts/contact';


export const FetchDetailContact = createAsyncThunk<
  PhoneContactInterface,
  string,
  { state: RootState }
>('contact-detail/FetchDetailContact', async (contactId, thunkAPI) => {
  try {
    const res = await fetch('./phones.json');
    const data: PhoneContactInterface[] = await res.json();
    console.log(data)
    return data.find(contact => contact.id == contactId) as PhoneContactInterface;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
