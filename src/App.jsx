import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState(0);
  const [books, setBooks] = useState([]);

  const getBook = async (text) => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${text}`
      );

      console.log(text);
      console.log(result);
      setBooks(result.data.items);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    if (searchText) {
      getBook(searchText);
    }
  }, [searchText]);

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
    console.log(event.target.value);
  };

  console.log(searchText);

  return (
    <div className="App">
      <label htmlFor="search-text">
        <h1>Find a Book</h1>
        <input id="search-text" type="text" onChange={handleSearchText} />
      </label>
      <div className="book-list">
        {books.map((book) => {
          return (
            <ul>
              <li> {book.volumeInfo.title} </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
