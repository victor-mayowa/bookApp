import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteId, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const deleteHandler = () => {
    deleteId(book.id);
  };

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  const onSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="book-show">
      <img
        alt="/"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />

      {showEdit ? (
        <div>
          <BookEdit book={book} onSubmit={onSubmit} />
        </div>
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={editHandler}>
          Edit
        </button>
        <button className="delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
