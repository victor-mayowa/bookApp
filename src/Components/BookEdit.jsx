import React, { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
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
