import { createSlice } from '@reduxjs/toolkit';
import fetchAdminLogin from './adminThunk';

const initialState = {
  isAuth: false,
  admin: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdminLogin.fulfilled, (state, action) => ({ ...state, admin: action.payload.data }))
      .addCase(fetchAdminLogin.rejected, state => state);
  },
});

export const { login } = adminSlice.actions;

export default adminSlice.reducer;
