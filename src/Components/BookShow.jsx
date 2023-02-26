import React, { useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../Context/Books";
import useBooksContext from "../Hooks/use-books-context"

const BookShow = ({ book}) => {
  // const { deleteIdHandler } = useContext(BooksContext);

  const {deleteIdHandler} = useBooksContext(BooksContext)
  const [showEdit, setShowEdit] = useState(false);

  const deleteClickHandler = () => {
    deleteIdHandler(book.id);
  };

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  const onSubmit = () => {
    setShowEdit(false);
  }; 

  return (
    <div className="book-show">
      <img alt="/" src={`https://picsum.photos/seed/${book.id}/300/200`} />

      {showEdit ? (
        <div>
          <BookEdit book={book} onSubmit={onSubmit} />
        </div>
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={editHandler}></button>
        <button className="delete" onClick={deleteClickHandler}></button>
      </div>
    </div>
  );
};

export default BookShow;
