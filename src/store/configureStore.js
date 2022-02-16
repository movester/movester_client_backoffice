import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './admin/adminSlice';
import writeReducer from './stretching/wirteSlice';

const store = configureStore({
  reducer: {
    admin: adminReducer,
    write: writeReducer,
  },
});

export default store;
