import { createContext } from "react";
import { useState, useEffect } from "react";

const BookShelfContext = createContext();

const BookShelfProvider = ({children}) => {
    const [bookShelf, setBookShelf] = useState(() => {
        // Initializer function to set initial state from localStorage
        const savedBooks = localStorage.getItem("added-books");
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    useEffect(() => {
        localStorage.setItem("added-books" , JSON.stringify(bookShelf))
    }, [bookShelf])

  const AddBookShelf = (book) => {
        
        setBookShelf(prevBookShelf => {
            const updatedBookShelf = [...prevBookShelf, book];
            console.log(updatedBookShelf); // This will log the updated bookshelf
            return updatedBookShelf;
        });
    }

    return (
        <BookShelfContext.Provider value={{AddBookShelf, bookShelf}}>
            {children}
        </BookShelfContext.Provider>
    );
};

export {BookShelfContext, BookShelfProvider};