import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    const updateBook = [...books, response.data];
    setBooks(updateBook);
  };

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
    await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedData = books.filter((book) => {
      return id !== book.id;
    });
    setBooks(updatedData);
  };

  return (
    <div className="app">
      <h1>ReadingList</h1>
      <BookList books={books} deleteId={deleteIdHandler} onEdit={editHandler} />
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
