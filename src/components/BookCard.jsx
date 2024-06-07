import "./styles/BookCard.css";
import "./styles/searchBar.css"

const BookCard  =  ({book, AddBookShelf = ()=>{}, showAddButton}) => {
    return (<div className="card">
                    <span>
                        <div className="cardItem">
                        <h3>Book Title: </h3> <span>{book.title}</span>
                        </div>
                        <div className="cardItem">
                        <h3>Edition Count:</h3> <span> {book.edition_count}</span>
                        </div>
                        <div className="buttonContainer">
                            {showAddButton &&  <button className="buttonStyling" onClick={() => AddBookShelf(book) }>Add to bookshelf</button> }
                       </div>
                    </span>
    </div>);
}

export default BookCard;

