import { useState } from "react";
import "../NotesApp.css";

export default function NotesApp() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  function add() {
    if (input.trim() === "") {
      alert("Please Enter Valid Note");
      return;
    }

    const newNote = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString()
    };

    setNotes((prev) => [...prev, newNote]);

    setInput("");
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  }

  function clearAll() {
    setNotes([]);
  }

  return (
    <div className="container">
      <div>
        <input
          className="input"
          type="text"
          placeholder="Enter Your Note here ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              add();
            }
          }}
        />

        <button className="btn" onClick={add}>
          Add
        </button>

        <p>Characters: {input.length}</p>

        <br />

        {notes.length > 0 && (
          <button className="btn" onClick={clearAll}>
            Clear All
          </button>
        )}

        <p>Total Notes : {notes.length}</p>
      </div>

      <div>
        <ul>
          {notes.length === 0 ? (
            <li className="empty-text">No notes yet</li>
          ) : (
            notes.map((note) => (
              <li key={note.id}>
                {note.text}
                {note.time}
                <button className="btn" onClick={() => deleteNote(note.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
