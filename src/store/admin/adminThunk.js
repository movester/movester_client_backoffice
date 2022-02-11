import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout } from '../../lib/api/auth';

export const fetchAdminLogin = createAsyncThunk('admins/login', async (payload, thunkAPI) => {
  try {
    const response = await login(payload);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchAdminLogout = createAsyncThunk('admins/logout', async (_, thunkAPI) => {
  try {
    const response = await logout();
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
