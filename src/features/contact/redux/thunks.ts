import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneContactInterface } from '../ts/contact';
import { RootState } from 'src/store';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const FetchContacts = createAsyncThunk<PhoneContactInterface[], void>(
  'contacts/FetchContacts',
  async function (_, thunkAPI) {
    try {
      const res = await fetch('/phones.json');
      return await res.json();
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
    const current_contact = thunkAPI.getState().contacts.current_contact;
    if (current_contact?.id == contactId) {
      return current_contact as PhoneContactInterface;
    } else {
      const res = await fetch('/phones.json');
      const data: PhoneContactInterface[] = await res.json();
      return data.find(contact => contact.id == contactId) as PhoneContactInterface;
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const CreateContactThunk = createAsyncThunk<
  PhoneContactInterface,
  PhoneContactInterface,
  { state: RootState }
>('contacts/CreateContactThunk', async (data, thunkAPI) => {
  try {
    await delay(1000);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const UpdateContactThunk = createAsyncThunk<
  PhoneContactInterface,
  PhoneContactInterface,
  { state: RootState }
>('contacts/UpdateContactThunk', async (data, thunkAPI) => {
  try {
    await delay(1000);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
