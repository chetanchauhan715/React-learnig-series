import { useState } from "react";
import "../NotesApp.css";

export default function NotesApp() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  function add() {
    if (input.trim() === "") {
      alert("Please Enter Valid Note");
      return;
    }

    const newNote = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString(),
      completed: false,
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

  // check and uncheck note - check box toggle
  function toggleCompleted(id) {
    const compeltedNote = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          completed: !note.completed,
        };
      } else {
        return note;
      }
    });
    setNotes(compeltedNote);
  }

  // filtered notes
  const filteredNotes = notes.filter((note) => {
    return note.text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container">
      <h1>Notes App</h1>

      <div className="input-container">
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

        {/* Characters count */}
        <p>Characters: {input.length}</p>

        {/* search */}
        <input
          className="input search-input"
          type="text"
          placeholder="Serch Note .."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>Total Notes : {notes.length}</p>

        {/* <br /> */}

        {notes.length > 0 && (
          <button className="btn" onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>

      {/* Notes list */}
      <ul className="notes-list">
        {notes.length === 0 ? (
          <li className="empty-state">No Notes Yet !</li>
        ) : filteredNotes.length === 0 ? (
          <li className="empty-text">No Matching Lists</li>
        ) : (
          filteredNotes.map((note) => (
            <li className="note-item" key={note.id}>
              <div className="left-section">
                <input
                  type="checkbox"
                  checked={note.completed}
                  onChange={() => toggleCompleted(note.id)}
                />

                <div>
                  <p
                    style={{
                      textDecoration: note.completed ? "line-through" : "none",
                    }}
                  >
                    {note.text}
                  </p>
                  <small className="time">{note.time}</small>
                </div>
              </div>

              <button
                className="btn delete-btn"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
