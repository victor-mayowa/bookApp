import BooksContext from "../Context/Books";
import { useContext } from "react";

const useBooksContext = () => useContext(BooksContext)


export default useBooksContext


///optional
//this is a custom hook for useContext 