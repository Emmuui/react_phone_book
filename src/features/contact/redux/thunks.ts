import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneContactInterface } from '../ts/contact';
import { RootState } from 'src/store';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchContacts = createAsyncThunk<PhoneContactInterface[], void>(
  'contacts/fetchContacts',
  async function (_, thunkAPI) {
    try {
      const res = await fetch('/phones.json');
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchDetailContact = createAsyncThunk<
  PhoneContactInterface,
  string,
  { state: RootState }
>('contacts/fetchDetailContact', async (contactId, thunkAPI) => {
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

export const createContactThunk = createAsyncThunk<
  PhoneContactInterface,
  PhoneContactInterface,
  { state: RootState }
>('contacts/createContactThunk', async (data, thunkAPI) => {
  try {
    await delay(1000);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateContactThunk = createAsyncThunk<
  PhoneContactInterface,
  PhoneContactInterface,
  { state: RootState }
>('contacts/updateContactThunk', async (data, thunkAPI) => {
  try {
    await delay(1000);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteContactThunk = createAsyncThunk<
    PhoneContactInterface[],
    string,
    { state: RootState }
    >('contacts/deleteContactThunk', async (id, thunkAPI) => {
  try {
    await delay(1000);
    const contacts = thunkAPI.getState().contacts.contacts;
    return contacts.filter((contact) => contact.id !== id)
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

