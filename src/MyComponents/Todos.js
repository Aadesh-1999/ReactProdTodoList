import React from 'react';
import { TodoItem } from './TodoItem';
import './Todos.css';
export const Todos = (props) => {
  return (
  <div className="container mb-5 text-center px-5">
      <h3 className='my-4 mb-2 pb-3 title'>TODOS List</h3><hr/>
        {props.todos.length===0 ? "No Todos To Display" :
            props.todos.map((todo)=>{
              return(
              <div key={todo.sno}>
              <TodoItem todo={todo}  onDelete={props.onDelete} /><hr />
              </div>
              );
            })
        }
      
  </div>
  );
};