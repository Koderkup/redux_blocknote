import React from "react";
import { useState, useEffect } from "react";
import { noteDelete } from "./redux/actions";
import { useDispatch } from "react-redux";
export const SingleNote = ({ text, id, handleUpdate, displayNote }) => {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setNoteText(text);
    }
  }, [text]);
  const handleDelete = (e) => {
    dispatch(noteDelete(id));
  };

  return (
    <li className="li" onDoubleClick={(e) => displayNote(e, text)}>
      {noteText.substring(0, 10)}
      <button onClick={handleDelete}>удалить</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleUpdate(e, id);
        }}
      >
        редактировать
      </button>
    </li>
  );
};
