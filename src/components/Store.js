// store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../reducers/PostSlice';
import userReducer from '../reducers/UserSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});

export default store;
