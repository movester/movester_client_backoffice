import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, updatePassword } from '../../services/auth';

export const fetchAdminLogin = createAsyncThunk('admins/login', async (payload, thunkAPI) => {
  try {
    const response = await login(payload);
    localStorage.setItem('admin', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchAdminLogout = createAsyncThunk('admins/logout', async (_, thunkAPI) => {
  try {
    const response = await logout();
    localStorage.removeItem('admin');
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchEditPassword = createAsyncThunk('admins/edit', async (payload, thunkAPI) => {
  console.log(payload.adminIdx);
  try {
    const response = await updatePassword(payload, payload.adminIdx);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
