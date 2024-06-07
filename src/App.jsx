import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [findBook, setFindBook] = useState("");
  const [bookProfile, setBookProfile] = useState([]);

  async function getBooks(bookName) {
    console.log(bookName);
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}`
    );
    setBookProfile(result.data.items);
    // console.log(bookProfile);
  }
  const handleOnChange = (e) => {
    setFindBook(e.target.value);
    console.log(findBook);
    getBooks(e.target.value);
  };

  return (
    <div className="App">
      {
        /* start coding here */
        <>
          <div className="header">
            <h1>Find a Book</h1>
            <input type="text" value={findBook} onChange={handleOnChange} />
          </div>
          <div>
            <ul>
              {bookProfile.map((arr) => {
                return <li key={arr.id}>{arr.volumeInfo.title}</li>;
              })}
            </ul>
          </div>
        </>
      }
    </div>
  );
}

export default App;
