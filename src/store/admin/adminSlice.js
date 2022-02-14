import { createSlice } from '@reduxjs/toolkit';
import { fetchAdminLogin, fetchAdminLogout, fetchEditPassword } from './adminThunk';

const initialState = {
  errorMessage: '',
  isEdited: false,
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
        state.errorMessage = '';
      })
      .addCase(fetchAdminLogin.fulfilled, (state, action) => {
        state.isAuth = true;
        state.admin = action.payload.data;
      })
      .addCase(fetchAdminLogin.rejected, (state, action) => {
        state.isAuth = false;
        state.errorMessage = action.payload.error;
      })
      .addCase(fetchAdminLogout.pending, state => {
        state.isAuth = true;
        state.errorMessage = '';
      })
      .addCase(fetchAdminLogout.fulfilled, state => {
        state.isAuth = false;
        state.admin = null;
      })
      .addCase(fetchAdminLogout.rejected, (state, action) => {
        state.isAuth = true;
        state.errorMessage = action.payload.error;
      })
      .addCase(fetchEditPassword.pending, state => {
        state.isAuth = true;
        state.isEdited = false;
        state.errorMessage = '';
      })
      .addCase(fetchEditPassword.fulfilled, state => {
        state.isAuth = true;
        state.isEdited = true;
      })
      .addCase(fetchEditPassword.rejected, (state, action) => {
        state.isAuth = true;
        state.isEdited = false;
        state.errorMessage = action.payload.error;
      });
  },
});

export const { checkAdmin } = adminSlice.actions;

export default adminSlice.reducer;
