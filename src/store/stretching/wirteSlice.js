import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  content: '',
  post: null,
  postError: null,
  postId: null,
};

const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {
    changeField: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    clearField: () => initialState,
    setPost: (state, { payload }) => ({
      ...state,
      title: payload.title,
      content: payload.post.content,
      postId: payload.post.id,
    }),
  },
  extraReducers: {},
});

export const { changeField, clearField, setPost } = writeSlice.actions;

export default writeSlice.reducer;
