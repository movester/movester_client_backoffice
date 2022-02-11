import { createSlice } from '@reduxjs/toolkit';
import fetchAdminLogin from './adminThunk';

const initialState = {
  isAuth: false,
  admin: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    checkAdmin(state, data) {
      state.isAuth = true;
      state.admin = data.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdminLogin.pending, state => {
        state.isAuth = false;
      })
      .addCase(fetchAdminLogin.fulfilled, (state, action) => {
        state.isAuth = true;
        state.admin = action.payload.data;
      })
      .addCase(fetchAdminLogin.rejected, state => {
        state.isAuth = false;
      });
  },
});

export const { checkAdmin } = adminSlice.actions;

export default adminSlice.reducer;
