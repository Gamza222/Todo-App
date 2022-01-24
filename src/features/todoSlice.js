// rxslice

import { createSlice } from '@reduxjs/toolkit';
// comst

const initialState = {
    todoList: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          state.todoList.push(action.payload);
      },
      setCheck: (state, action) => {
          state.todoList.map(item => {
              if (action.payload === item.id) {
                  item.done = !item.done;
              }
          })
        }
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;

export default todoSlice.reducer;

export const selectTodoList = state => state.todos.todoList