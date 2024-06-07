import "./styles/searchBar.css"

const SearchBar = ({search , searchHandler , handleViewBookshelf }) => {
    return (<div>
         <div className="searchBarContainer">
                <p>,</p>
                <div className="searchBarLeft">
                     <h2>Search by book name:</h2>
                     <input type="text" value={search} onChange={searchHandler}/>
                </div>
                <div className="searchBarRight">
               <button onClick={handleViewBookshelf} className="buttonStyling"> My Bookshelf</button>

                </div>
            </div>
    </div>);
}

export default SearchBar;