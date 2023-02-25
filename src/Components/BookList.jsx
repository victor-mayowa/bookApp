import React from "react";
import BookShow from "./BookShow";
import BooksContext from "../Context/Books";
import useBooksContext from "../Hooks/use-books-context"

const BookList = () => {
  
  // const {books} = useContext(BooksContext)

  const { books } = useBooksContext(BooksContext);

  const renderedList = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedList}</div>;
};

export default BookList;
