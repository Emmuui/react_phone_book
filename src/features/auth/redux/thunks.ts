import { createAsyncThunk } from '@reduxjs/toolkit';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export type LoginParams = { email: string; password: string }

export const fetchUser = createAsyncThunk<string, LoginParams>(
  'user/fetchUser',
  async function (data, thunkAPI) {
    try {
      await delay(1000);
      localStorage.setItem('email', data.email);
      return data.email;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
