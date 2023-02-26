import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    const updateBook = [...books, response.data];
    setBooks(updateBook);
  };

  const fetchBook = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const editHandler = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedData = books.map((book) => {
      if (id === book.id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedData);
  };

  const deleteIdHandler = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedData = books.filter((book) => {
      return id !== book.id;
    });
    setBooks(updatedData);
  };

  const contextToShare = {
    books,
    createBook,
    fetchBook,
    editHandler,
    deleteIdHandler,
  };

  return (
    <BooksContext.Provider value={contextToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
