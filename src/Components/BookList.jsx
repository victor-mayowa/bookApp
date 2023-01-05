import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteId, onEdit }) => {

  const renderedList = books.map((book) => {
    return <BookShow key={book.id} book={book} deleteId={deleteId} onEdit={onEdit} />;
  });

  return <div className="book-list">{renderedList}</div>;
};

export default BookList;
