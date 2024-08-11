import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
       const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:3000/todos');
                const data = await response.json();
                console.log(tasks);
                setTasks(data);
               
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchTodos();
    },[]);

    const addTodo=async(task)=>{
        try{
            const response=await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title: task, isCompleted: false}),
            });
            const newTask=await response.json();
            console.log("New task", newTask);
            setTasks((prev)=>[...prev,newTask]);
        }
        catch(err) {
            console.log(err);
        }
    };

    const deleteTodo=async(id)=>{
        try{
            await fetch(`http://localhost:3000/todos/${id}`,{
                method: "DELETE",   
            });
            setTasks((prev)=>prev.filter((task)=>task.id!==id));
        }
        catch(err) {
            console.log(err);
        }
    }
    const updateTodo=async(task)=>{
        try{
           const response= await fetch(`http://localhost:3000/todos/${task.id}`,{
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(task),
            });
            const updatedTask=await response.json();
            setTasks((prev)=>prev.map((t)=>t.id === task.id ? updatedTask: t));
        }
        catch(err) {
            console.log(err);
        }
    };

    return(
        <AppContext.Provider value={{tasks,addTodo,deleteTodo,updateTodo}}>
            {children}
        </AppContext.Provider>
    )

}
export {AppContext, AppProvider} ;
