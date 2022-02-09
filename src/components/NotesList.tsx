import * as React from "react";
import { Note } from "../models/note";
import Notes from "./Notes";

interface INotesListProps {
    notes: ReadonlyArray<Note>,
    setNotes:React.Dispatch<React.SetStateAction<readonly Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  
  const handleDelete = (id: string) => {
      console.log("the note to be deleted", id,);
      setNotes(notes.filter(note => note.id !== id))
      
  };
  const renderNotesList = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 style={{ marginLeft: "40%" }} className="mt-3">Notes</h2>
      <div style={{marginLeft:"40%"}}>{renderNotesList()}</div>
    </>
  );
};

export default NotesList;
