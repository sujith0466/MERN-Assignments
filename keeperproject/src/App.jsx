import React, { useState, useEffect, createContext } from 'react';
import Header from './header';
import Note from './note';
import Footer from './footer';
import CreateArea from './createArea';

export const NotesContext = createContext();

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    if (!newNote.title.trim() && !newNote.content.trim()) return;
    setNotes(prevNotes => [...prevNotes, { ...newNote, key: Date.now() }]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(noteItem => noteItem.key !== id));
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      <div className="app-container">
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem.key}
              id={noteItem.key}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
