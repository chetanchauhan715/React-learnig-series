import { useState } from "react";
import "./form.css";

export default function SignupForm(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        if(email.trim() === "" || password.trim() === "") {
            alert("Plase enter valid details first ")
            return ;
        } else {
        alert(`submitted with ${email} and ${password}`);
    }
}

    return(
        <div className="form-main-container" style={ {border:"2px solid black", padding:"20px", height:"80%"}}>

            <h1>Sign up Form</h1>

            <form onSubmit={handleSubmit}>
                <input 
                type="email"
                placeholder="Enter Your Email !!"
                value={email}
                onChange={ (e)=> setEmail(e.target.value)}
                />

                <input 
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={ (e)=> setPassword(e.target.value)}
                />
                
                <button type="submit">Create Account</button>
              
            </form>

            
        </div>
    )
}