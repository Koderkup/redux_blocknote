import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { noteCreate, noteDelete, noteUpdate } from "./redux/actions";
import { SingleNote } from "./SingleNote";
import { nanoid } from "nanoid";

const Notes = (props) => {
  const [newNote, setNewNote] = useState("");
  const dispatch = useDispatch();
  
  const notes = useSelector((state) => {
    const { noteReducer } = state;
    return noteReducer.notes;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    dispatch(noteCreate(newNote, id));
    setNewNote("");
  };

  const handleTextArea = (e) => {
    e.preventDefault();
    setNewNote(e.target.value);
  };

  const handleUpdate = (e, id) => {
    let val = newNote
    setNewNote("");
    dispatch(noteUpdate(val, id));

  };

  const displayNote =(e,text)=>{
    setNewNote(text);
  }
  return (
    <div className="notes-component">
      <ol className="list-notes">
        {!!notes.length &&
          notes.map((note) => {
            return (
              <SingleNote
                handleUpdate={handleUpdate}
                displayNote={displayNote}
                key={note.id}
                text={note.text}
                id={note.id}

              />
            );
          })}
      </ol>
      <form action="#" onSubmit={handleSubmit}>
        <textarea
          onChange={handleTextArea}
          value={newNote}
          cols="30"
          rows="10"
          placeholder="Для редактирования записи - двойной клик по ней. Для сохранения изменений - клик по кнопке редактировать."
        ></textarea>
        <button type="submit">
          создать запись
        </button>
      </form>
    </div>
  );
};

export default Notes;
