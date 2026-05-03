import { useState } from "react";

function UserTask( {task}){
    const [userInput , setUserInput] = useState("");
    const [tasks , setTasks] = useState([]);

    function addTask(){
        if(userInput.trim() === "" ) {
            alert("please enter valid task");
            return;
        }

        const newTask = {
            id:Date.now(),
            text:userInput
        } ;
    
    setTasks( (prev) => [...prev , newTask]);
    setUserInput("");

    }


    

    return (
        <div style={ {border:"1px solid black", padding:"10px", backgroundColor:"skyblue"}}>
            <h2>TO-Do list</h2>
            <input
            type="text"
            placeholder="Enter Your task Here ..."
            value={userInput}
            onChange={ (e) => setUserInput(e.target.value)} 
            />

            <button onClick={addTask}>Add</button>

            {tasks.length === 0 && <p>No Tasks yet</p>}

            <ul>
                {tasks.map( (task) =>(
                    <li key={task.id}>{task.text}
                    <button onClick={() => deleteTask(task.id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    );
    
}

function App3(){
    return(
        <div>
            <UserTask/>
        </div>
    );
}

export default App3;