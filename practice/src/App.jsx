import { useState } from "react";


// function TodoList(){

//   const [todos , setTodos] = useState([]);
//   const [input , setInput] = useState("");

//   function addTodo(){
//     // console.log("clicked");

//     if(input.trim() === ""){
//       // console.log("empty input");
//     return;
//     }

//     const newTodo = {
//       id:Date.now(),
//       text:input
//     } ;

//     // console.log("adding:", input);


//     setTodos( (prev) => [...prev , newTodo]);
//     setInput("");
//   }

//   return(
//     <div>
//       <h2>My React Todo</h2>

//       <input 
//       type="text"
//       placeholder="Enter todo..."
//       value={input}
//       onChange={ (e) => setInput(e.target.value)}/>

//     <button onClick={addTodo}>Add</button>

//     <ul>
//       {todos.map((todo) => (
//       <li key={todo.id}>
//         {todo.text}</li>
//         ))}
//         </ul>
//     </div>

   
//   );
// }
 
function UserCard({name , age , city}){
  const [showDetails , setShowDetails] = useState(false);
  const [status , setStatus] = useState(false);

  function toggleDetails(){
    setShowDetails(prev => !prev);
  }

  function toggleStatus(){
    setStatus( (prev) => !prev);
  }

  return(
    <div style={ {border:"1px solid black" , padding:"10px", margin:"10px"}}>
      <h2>{name}</h2>

    <p style={ {color:status ? "green" : "red"}}>
      Status : {status ? "Online " : "Offline"}
    </p>

    <button onClick={toggleStatus}>
      {status ? "Go offline" : "Go online"}
    </button>

<br />
<br />

      <button onClick={toggleDetails}>
        {showDetails ? "Hide-details" : "Show-details"}
      </button>

      {showDetails && (
        <div>
          <p>Age : {age}</p>
          <p>City : {city}</p>
        </div>
      )}
    </div>
  );
}

         
function App(){
  return (
    <div>
      <h1>Profile - card</h1>
      <UserCard name="chetan" age={23} city="botad" />
      <UserCard name="abs" age={23} city="botad" />
    </div>
  );
}

export default App;