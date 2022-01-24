import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/features/todoSlice.js'

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});
