import React, { useContext } from 'react';
import {AppContext} from "./AppContext";

const Todo = ({task}) => {
    const {deleteTodo, updateTodo}= useContext(AppContext);
    const handleComplete= async()=>{
        await updateTodo({...task, isCompleted: !task.isCompleted});
    };
    return (
        <>
            <div className='row bg-success m-1 d-flex p-1 rounded'> 
            <input className="col-1 m-2 text-center" style={{height: '10pt', width: '10pt'}} type='checkbox' checked={task.isCompleted} onChange={handleComplete}></input>
            <h5 className='col-10 text-light' style={{textDecoration: task.isCompleted ? 'line-through': 'none'}} onClick={handleComplete}>{task.title}</h5>
            <button className='btn col-1 text-danger' onClick={() => deleteTodo(task.id)}><i class="bi bi-x-lg"></i></button>
            </div>
        </>
    )
}

export default Todo;