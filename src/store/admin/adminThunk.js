import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAdminLogin = createAsyncThunk('admins/login', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/api/admins/login', {
      email: payload.id,
      password: payload.password,
    });

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export default fetchAdminLogin;
