import Books from './components/Books';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookshelf from './components/Bookshelf';
import { BookShelfProvider } from './components/BookShelfContext';
import "./components/styles/style.css"

function App() {
  return (
    <div>
    <BookShelfProvider>
      <BrowserRouter >
          <Routes>
            <Route path="/book"  Component={ Bookshelf  } /> 
            <Route path="/"  Component={ Books  } /> 
          </Routes>
      </BrowserRouter>
    {/* <Books /> */}
    </BookShelfProvider>
    </div>
  );
}

export default App;
