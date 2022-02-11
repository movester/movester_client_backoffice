import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../lib/api/auth';

const fetchAdminLogin = createAsyncThunk('admins/login', async (payload, thunkAPI) => {
  try {
    const response = await login(payload)
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export default fetchAdminLogin;
