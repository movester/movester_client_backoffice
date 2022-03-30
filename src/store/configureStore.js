import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import adminReducer from './admin/adminSlice';
import writeReducer from './stretching/wirteSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    write: writeReducer,
  },
});

export default store;
