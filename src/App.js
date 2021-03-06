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
      <h1 id='app-container_header'>To-Do List</h1>
  
      <div id="app-container">
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
