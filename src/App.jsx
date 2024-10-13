import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import BookDetailPage from "./components/BookDetailPage";
import MyBooksPage from "./components/MyBooksPage";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import Loader from "./components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = sessionStorage.getItem('books');
    const storedSavedBooks = sessionStorage.getItem('savedBooks');

    if (storedBooks) {
      setBooks(JSON.parse(storedBooks)); // Load books from sessionStorage
    }
    if (storedSavedBooks) {
      setSavedBooks(JSON.parse(storedSavedBooks)); // Load saved books from sessionStorage
    }
  }, []);

  const api_key = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  const searchBooks = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${api_key}`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setBooks(data.items);
        sessionStorage.setItem('books', JSON.stringify(data.items));
      } else {
        setError("No books found. Try another query.");
      }
    } catch (error) {
      setError("Error fetching data. Try again!");
    }
    setLoading(false);
  };

  const saveBook = (book) => {
    const updatedSavedBooks = savedBooks.includes(book.id)
      ? savedBooks.filter(id => id !== book.id) // Remove book if already saved
      : [...savedBooks, book.id]; // Add book if not saved

    setSavedBooks(updatedSavedBooks);
    sessionStorage.setItem('savedBooks', JSON.stringify(updatedSavedBooks));
  };

  const handleBookSelect = (book) => {
    const bookId = book.id;
    navigate(`/books/${bookId}`, { state: { book } });
  };

  return (
    <div className="bg-transparent min-h-full">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <HeroSection />
      <SearchBar onSearch={searchBooks} />
      {loading && <Loader />}
      {error && <p className="text-red-500 text-center text-xl">{error}</p>}
      <div className="container mx-auto p-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelect={() => handleBookSelect(book)}
              onSave={() => saveBook(book)}
              isSaved={savedBooks.includes(book.id)} // Check if the book is saved
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MainApp = () => {
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books/:bookId" element={<BookDetailPage />} />
        <Route path="/my-books" element={<MyBooksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
