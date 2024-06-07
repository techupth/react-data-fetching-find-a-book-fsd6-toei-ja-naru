import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  const getBooks = async (keyword) => {
    if (keyword) {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
      );
      setBooks(result.data.items);
    }
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    getBooks(event.target.value);
  };

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input type="text" onChange={handleSearch} value={searchInput} />
      <ul>
        {books.map((item) => {
          return <li key={item.id}>{item.volumeInfo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
