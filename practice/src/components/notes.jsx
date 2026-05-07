import { useState } from "react";

export default function NotesApp(){

    const [input , setInput] = useState("");
    const [notes , setNotes] = useState([]);

    function add(){
        if(input.trim() === ""){
            alert("Please Enter Valid Note");
            return;
        }

        const newNote = {
            id:Date.now(),
            Text:input
        }

        setNotes( (prev) => [...prev , newNote]);

       setInput("");
    }

    function deleteNote(id){
        const updatedNotes = notes.filter(
            (note) => note.id !== id
        );

        setNotes(updatedNotes);
    }

   function clearAll(){
    notes = [];
   }




    return (
        <div style={ {border:"2px solid white" , padding:"20px"}}>

            <div>
                <input 
                type="text"
                placeholder="Enter Your Note here ..."
                value={input}
                onChange={ (e)=> setInput(e.target.value)}
                />

                <button onClick={add}>
                    Add
                    </button>

                    <p>Total Notes :  {notes.length}</p>

                    <button onClick={clearAll}>Clear All</button>
            </div>

            <div>
                <ul>
                    {
                    notes.length === 0 ?

                    (<li>No notes yet</li>) :
                    
                    (notes.map( (note) => (
                        <li style={ {listStyle:"none"}} key={note.id}>
                            {note.Text}
                            <button onClick={()=> deleteNote(note.id)}>
                                Delete
                            </button>
                        </li>
                    )))

                }
                </ul>
            </div>

        </div>
    )
}