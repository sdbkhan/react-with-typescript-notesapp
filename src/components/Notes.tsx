import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/note";

interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({ note,handleDelete }) => {
  return (
    //     <div>note card
    //        { console.log(note,"note")}
    //   </div>
    <div className="mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body style={{backgroundColor:note.color}}>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
          <Button className="mt-3" variant="danger"onClick={()=>handleDelete(note.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
