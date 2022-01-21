import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="row">
      <h4 className="col">{todo.title}</h4>
      <p className="col">{todo.desc}</p>
      <div className="col">
        <button className="btn btn-danger btn-sm" onClick={() => { onDelete(todo) }}>
          Delete</button>
      </div>


    </div>
  );
};
