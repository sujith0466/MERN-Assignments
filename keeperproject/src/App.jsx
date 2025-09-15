import React,{useState} from 'react';
import Header from './header'
import Note from './note'
import Footer from './footer'
import notes from './notes'
import CreateArea from './createArea';


function CreateNote(note){
  return <Note key={note.key} props={note}/>
}

function App() {

  const [notes, setNotes]=useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, { ...newNote, key: Date.now() }]);
  }

  function deleteNote(id) {
  setNotes(prevNotes => prevNotes.filter(noteItem => noteItem.key !== id));
}

  return (
  <div>
      <Header/>
      <CreateArea onAdd={addNote}/>  
      {notes.map((noteItem,index)=>{
        return <Note key={noteItem.key} id={noteItem.key} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
      })}
      <Footer/>
    </div>
    );
}

export default App;
