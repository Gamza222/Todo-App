import React, { useState } from 'react';
import './input.css'
import { useDispatch } from 'react-redux';
import { saveTodo } from '../todoSlice';

const Input = (props) => {

  const [input, setInput] = useState('');
  const dispatch = useDispatch();

    const addTodo = () => {
      console.log(`adding ${input}`);
      if (input){
      dispatch(saveTodo({
        item: input,
        done: false,
        id: Date.now()
      }))
    }
    setInput('');
    };
    
  return (
  <div className="input"> 
  <input id='input-textarea' type='text' value={input} onChange={event=>setInput(event.target.value)}/>
      <button id="input-button" onClick={addTodo} >Add!</button>

  </div>
  );
};



export default Input;
