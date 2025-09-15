import React,{useState} from 'react';
import Header from './header'
import Note from './note'
import Footer from './footer'
import notes from './notes'
import createArea from './createArea';


function createNote(note){
  return <Note key={note.key} props={note}/>
}

function App() {

  const [notes, setNotes]=useState([]);
  function addNote(newNote){
    setNotes(prevNotes=>{
      return [...prevNotes,newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      });
    });

  }
  return (
  <div>
      <Header/>
      <createArea onAdd={addNote}/>  
      {notes.map((noteItem,index)=>{
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
      })}
      <Footer/>
    </div>
    );
}

export default App;
