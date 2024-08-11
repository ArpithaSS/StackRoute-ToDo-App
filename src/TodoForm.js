import React, { useContext, useState } from 'react';
import {AppContext} from './AppContext';


const TodoForm = () => {
    const [todo,setTodo]= useState('');
    const {addTodo}= useContext(AppContext);
    const handleAdd=async()=>{
        await addTodo(todo);
        setTodo('');
    }
    return (
        <>
                <div className='row justify-content-center p-2 m-2'>
                    <div className=''>
                    <h4 className='text-center text-light'>What's your plan for today?</h4>
                </div>
                </div>
                <div className='row justify-content-center p-2'>
                        <div className='input-group mb-3'>
                            <input type="text" className="form-control bg-light p-2" id="taskName" placeholder="" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                     
                        <div className='input-group-append'>
                        <button className="btn btn-secondary fw-bold p-2" onClick={handleAdd}>+</button>
                        </div>
                        </div>

                </div>
                
        </>
    )
}

export default TodoForm;