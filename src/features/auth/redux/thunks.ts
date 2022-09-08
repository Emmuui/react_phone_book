import { createAsyncThunk } from "@reduxjs/toolkit";


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchUser = createAsyncThunk<string, {email: string, password: string}>(
    'user/fetchUser',
    async function(data, thunkAPI) {
        try {
            await delay(1000);
            return data.email;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
