import * as React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "../models/note";

interface ICreateNotesProps {
  notes: ReadonlyArray<Note>;
  setNotes: React.Dispatch<React.SetStateAction<readonly Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes,setNotes}) => {
    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are required");
        }
        setError("")
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date:(new Date()).toString()
        }]);

           (titleRef.current as HTMLInputElement).value = "";
           (textRef.current as HTMLTextAreaElement).value = "";
    };
  return (
    <>
          <h2>Create Notes</h2>
          {error && <Alert>{ error}</Alert>}
      <Form className="mb-3 mb-3" onSubmit={(e)=> handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Notes"
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Notes"
            as="textarea"
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue={"#dfdfdf"}
            title="choose your Color"
            ref={colorRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
