import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Search = (props) => {
  const [search, setSearch] = useState([]);
  const [title, setTitle] = useState("");

  const notes = useSelector((state) => {
    const { noteReducer } = state;
    return noteReducer.notes;
  });

  useEffect(() => {
    setTimeout(() => {
      if (title) {
        const list = notes.map((note) => {
          return note.text;
        });

        const filterNotes = list.filter((item) => {
          if (item.includes(title)) {
            return item;
          }
        });
        setSearch(filterNotes);
      } else if (title === "") {
        setSearch([]);
      }
    }, 2000);
  }, [title]);

  return (
    <div>
      <h3>Поиск записи</h3>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
<div className="searchContainer"></div>
      {search.map((item, index) => {
        return <p key={index} className="searchItem">{item}</p>;
      })}
    </div>
  );
};

export default Search;
