import { createSlice } from '@reduxjs/toolkit';
import { fetchLoginThunk, fetchLogoutThunk } from './authAsyncThunk';

const initialState = {
  isAuth: false,
  error: null,
  admin: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLoginThunk.pending]: state => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
      state.admin = null;
    },
    [fetchLoginThunk.fulfilled]: (state, { payload }) => {
      state.isAuth = true;
      state.error = null;
      state.admin = payload.data.data;
      state.isLoading = false;
    },
    [fetchLoginThunk.rejected]: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
      state.admin = null;
      state.isLoading = false;
    },
    [fetchLogoutThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchLogoutThunk.fulfilled]: state => {
      state.isAuth = false;
      state.error = null;
      state.admin = null;
      state.isLoading = false;
    },
    [fetchLogoutThunk.rejected]: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
      state.admin = null;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
