import { useState } from "react"

export default function Greetings(){
    const [name , setName] = useState("");
    const [message , setMessage ] = useState("");


    function welcome(){
        if(name.trim() === "") return ;

        setMessage(`Hello , ${name}`);
        setName("");
    }

    return(
        <div style={ {border:"2px solid white", padding:"10px"}}>

        <input
        type="text"
        placeholder="Enter Your Name .."
        value={name}
        onChange={ (e)=> setName(e.target.value)}
        />

        <button onClick={welcome}>
            Add
        </button>

        <h2>{message}</h2>
        </div>
    );
} 