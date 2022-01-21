import React from 'react';
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
  return (
  <div className="container">
      <h3 className='my-5 pb-3'>TODOS List</h3><hr/>
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