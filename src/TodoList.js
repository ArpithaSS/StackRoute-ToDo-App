import React, {useContext} from 'react';
import Todo from './Todo';
import {AppContext} from "./AppContext";


const TodoList=()=>{
    const {tasks}= useContext(AppContext);
    return(
        <>
        <div className='row justify-content-center p-2'>

        <div className=''>
            {tasks.map((task)=>(
                <Todo key={task.id} task={task}/>
            ))}
        </div>
        </div>
        </>
    )
}

export default TodoList;