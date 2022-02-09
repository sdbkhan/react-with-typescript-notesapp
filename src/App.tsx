import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Note } from './models/note';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = useState < ReadonlyArray<Note>>([{
id: (new Date).toString(),
    title: "APJ",
    text: "APJ Abdul kalam was great Scientist",
    color: "#808080",
    date:(new Date).toString()
  }])
  return (
    <>
      <Header />
      <Container
        style={{ backgroundColor: "#9f8f8f", border: "5px solid #dfdfdf" }}
      >
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
