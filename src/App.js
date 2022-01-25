import React from 'react';
import './App.css';

import Input from './components/input';
import TodoItem from './components/TodoItem';
import {useSelector} from 'react-redux';
import {selectTodoList} from './features/todoSlice';


function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
  
      <div id="app-container">
     
        <h1 id='app-container_header'>Макс, Ник и Колян салам!</h1>
      
        
        {/* todo-list */}
        <div id="app-container_todo">
          { 
          todoList.map(item => 
           <TodoItem 
           name={item.item}
           done={item.done}
           id={item.id}
           />
           )
          }
      </div>
     {/* input */}
     <Input />
     </div>
    </div>
  );
}

export default App;
