import React, { useState, useContext } from "react";
import BooksContext from "../Context/Books";

const BookEdit = ({ book, onSubmit }) => {

  const { editHandler } = useContext(BooksContext);

  const [title, setTitle] = useState(book.title);

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    onSubmit();
    editHandler(book.id, title)
  };

  return (
    <form onSubmit={onSubmitFormHandler} className="book-edit">
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
