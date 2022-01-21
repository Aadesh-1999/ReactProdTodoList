import React, { useState } from 'react';

export const AddTodo = (props) => {
    
    const[title, setTitle]=useState("");
    const[desc, setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        //salert("added");
        props.addTodo(title, desc);
    }

    return (
        <div>
            <form className="container p-1" onSubmit={submit}>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-6 mb-3">
                        <label htmlFor="task" className="form-label">Title</label>
                        <input type="text" value={title} className="form-control" id="task" placeholder="Task Title" onChange={(e)=>{setTitle(e.target.value)}}  required />
                    </div>
                    <div className="col-md-12 col-lg-6 mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <textarea value={desc} className="form-control" id="desc" rows="1" placeholder="Task Description" onChange={(e)=>{setDesc(e.target.value)}} required></textarea>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-success" type="submit">ADD TASK</button>
                    </div>
                    <div className="col d-flex justify-content-start">
                        <button id="clrListBtn" type="button" className="btn btn-danger" /*onClick={clearTaskList()}*/>CLEAR LIST</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
