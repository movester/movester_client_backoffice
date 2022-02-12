import { createSlice } from '@reduxjs/toolkit';
import { fetchAdminLogin, fetchAdminLogout } from './adminThunk';

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
      })
      .addCase(fetchAdminLogout.pending, state => {
        state.isAuth = true;
      })
      .addCase(fetchAdminLogout.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isAuth = false;
        state.admin = null;
      })
      .addCase(fetchAdminLogout.rejected, state => {
        state.isAuth = true;
      });
  },
});

export const { checkAdmin } = adminSlice.actions;

export default adminSlice.reducer;
