import React, { useState } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input className="input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
