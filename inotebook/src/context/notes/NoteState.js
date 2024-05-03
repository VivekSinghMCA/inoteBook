import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "660819c0d9c5189f0b24c693",
          "user": "6606e8b25b4ec81c14cfb519",
          "title": "My Title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2024-03-30T13:55:12.369Z",
          "__v": 0
        },
        {
          "_id": "660819c2d9c5189f0b24c695",
          "user": "6606e8b25b4ec81c14cfb519",
          "title": "My Title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2024-03-30T13:55:14.177Z",
          "__v": 0
        },
        {
          "_id": "66098042e064033868c8ef0c",
          "user": "6606e8b25b4ec81c14cfb519",
          "title": "New Note",
          "description": " Please access the playlist",
          "tag": "youtube",
          "date": "2024-03-31T15:24:50.287Z",
          "__v": 0
        },
        {
          "_id": "660819c0d9c5189f0b24c694",
          "user": "6606e8b25b4ec81c14cfb519",
          "title": "My Title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2024-03-30T13:55:12.369Z",
          "__v": 0
        },
        {
          "_id": "660819c2d9c5189f0b24c696",
          "user": "6606e8b25b4ec81c14cfb519",
          "title": "My Title",
          "description": " Please wake up early",
          "tag": "personal",
          "date": "2024-03-30T13:55:14.177Z",
          "__v": 0
        },
        {
          "_id": "66098042e064033868c8ef0d",
          "user": "6606e8b25b4ec81c14cfb519",
          "title": "New Note",
          "description": " Please access the playlist",
          "tag": "youtube",
          "date": "2024-03-31T15:24:50.287Z",
          "__v": 0
        }
      ]
    
     const [notes, setNotes] = useState(notesInitial)
     
     // Add a Note
      const addNote = (title, description, tag) =>{
        //TODO : API Call
        console.log("Adding a new note");
        const note = {
          "_id": "66098042e064033868c8ef0d",
          "user": "6606e8b25b4ec81c14cfb519",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-03-31T15:24:50.287Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }
      // Delete a Note
      const deleteNote = () =>{
        
      }
      // Edit a Note
      const editNote = () =>{
        
      }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;