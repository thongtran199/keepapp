import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";
const App = () => {
  const [notes, setNotes] = React.useState([
    { key: 1, title: "Title", content: "Content" }
  ]);
  function addNote(note) {
    console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    console.log("Xoa note " + id);
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }
  return (
    <div>
      <Header />
      <Form addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            deleteNote={deleteNote}
            id={index}
            key={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
};
export default App;
