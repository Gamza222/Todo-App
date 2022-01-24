import React from 'react';
import './TodoItem.css';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';


const TodoItem = ({name, done, id}) => {
  const dispatch = useDispatch();
  const handleChange = () => {
      dispatch(setCheck(id));
  }

  return (
      <div id = 'app-container_todo-item'>
      {/*checkbox*/}
        <Checkbox
          checked={done}
        
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />

          <p id={done && 'app-container_todo-item--done'}>{name}</p>
      </div>
      )
  
};

export default TodoItem;
