import BookList from "./Components/BookList";
import BookCreate from "./Components/BookCreate";
import { useEffect, useContext } from "react";
import BooksContext from "./Context/Books";


function App() {

  const {fetchBook} = useContext(BooksContext)

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="app">
      <h1>ReadingList</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
