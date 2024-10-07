import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import BookDetails from "./components/BookDetails";
import BookDetailPage from "./components/BookDetailPage";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = sessionStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks)); // Load books from sessionStorage
    }
  }, []);

  const searchBooks = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      if (data.docs.length > 0) {
        setBooks(data.docs);
        sessionStorage.setItem('books', JSON.stringify(data.docs));
      } else {
        setError("No books found. Try another query.");
      }
    } catch (error) {
      setError("Error fetching data.");
    }
    setLoading(false);
  };

  const handleBookSelect = (book) => {
    // Navigate to book details route with the selected book's state
    const bookId = book.key.replace("/works/", "");
    navigate(`/books/${bookId}`, { state: { book } });
  };

  return (
    <div className="bg-transparent">
      <Navbar />
      <HeroSection />
      <SearchBar onSearch={searchBooks} />
      {loading && <Loader />}
      {error && <p className="text-red-500 text-center text-xl">{error}</p>}
      <div className="container mx-auto p-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {books.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onSelect={() => handleBookSelect(book)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/books/:bookId" element={<BookDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
