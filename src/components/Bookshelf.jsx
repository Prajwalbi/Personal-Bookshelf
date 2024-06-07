import "./styles/BookCard.css";
import BookCard from "./BookCard";
import { useContext } from "react";
import { BookShelfContext } from "./BookShelfContext";

const Bookshelf  =  ({ results = [] }) => {
    const {bookShelf} = useContext(BookShelfContext)
     results = bookShelf;
    return (<>
            <h1 className="bookshelfHeading">My Bookshelf</h1>
            <div className="cardContainer">
                    {  results.map((book, index) => {
                    return <BookCard key={index} book={book}  showAddButton={false}/>
                    })
                }
            </div>
            </>);
}



export default Bookshelf;