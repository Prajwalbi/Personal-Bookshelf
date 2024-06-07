
import { useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import BookCard from "./BookCard";
import "./styles/BookCard.css";
import "./styles/searchBar.css";
import { BookShelfContext } from "./BookShelfContext";
import SearchBar from "./SearchBar";

const BookSearch = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const { bookShelf , AddBookShelf } = useContext(BookShelfContext);
   
    const searchHandler = (e) => {
        // setSearch(e.target.value);
        setSearch(e.target.value);
    };

    useEffect(() => {
        if(search.trim() !== ""){
        fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(search)}&limit=10&page=1`)
        .then(response => response.json() )
        .then((data) => {
            setResults(data.docs);
        })
        .catch((e) => console.log(e))
        }else {
            setResults([]);
        }
    }, [search])

   
   
    const navigate = useNavigate();
    const handleViewBookshelf = () => {
        navigate("/book")
    }


    return (<div>
            {/* <div className="searchBarContainer">
                <p>.</p>
                <div className="searchBarLeft">
                     <h2>Search by book name:</h2>
                     <input type="text" value={search} onChange={searchHandler}/>
                </div>
                <div className="searchBarRight">
               <button onClick={handleViewBookshelf} className="buttonStyling"> My Bookshelf</button>

                </div>
            </div> */}
            <SearchBar search={search} searchHandler={searchHandler} handleViewBookshelf={handleViewBookshelf} />
                <div className="cardContainer">
                    {  results.map((book, index) => {
                        const isBooksInBookShelf = bookShelf.find(b => b.key === book.key);
                        const showAddButton = !isBooksInBookShelf;
                        return (book.title.includes(search)) &&
                        <BookCard key={index} book={book} search={search} AddBookShelf={AddBookShelf} showAddButton={showAddButton}/>
                    })
                    }
                </div>
           
            {/* <BookCard results={results} search={search} AddBookShelf={AddBookShelf}/> */}
    </div>);

}

export default BookSearch;