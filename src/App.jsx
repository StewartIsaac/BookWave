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

// Main App Component
const App = () => {
  const [books, setBooks] = useState([]); // Holds the list of books fetched from the API
  const [savedBooks, setSavedBooks] = useState([]); // Holds the IDs of saved books
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate(); // React Router hook for navigation

  // Effect to load books and saved books from sessionStorage when the app starts
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

  // API Key for Google Books API
  const api_key = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  // Function to search books using the Google Books API
  const searchBooks = async (query) => {
    setLoading(true); // Start loading
    setError(""); // Clear previous errors

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${api_key}`
      );
      const data = await response.json();

      // If books are found, update the state and store the results in sessionStorage
      if (data.items && data.items.length > 0) {
        setBooks(data.items);
        sessionStorage.setItem('books', JSON.stringify(data.items));
      } else {
        setError("No books found. Try another query."); // Set error if no books are found
      }
    } catch (error) {
      setError("Error fetching data. Try again!"); // Set error if the API call fails
    }

    setLoading(false); // End loading
  };

  // Function to save or remove a book from the saved list
  const saveBook = (book) => {
    const updatedSavedBooks = savedBooks.includes(book.id)
      ? savedBooks.filter(id => id !== book.id) // Remove book if it's already saved
      : [...savedBooks, book.id]; // Add book if it's not saved

    setSavedBooks(updatedSavedBooks); // Update the saved books state
    sessionStorage.setItem('savedBooks', JSON.stringify(updatedSavedBooks)); // Store updated list in sessionStorage
  };

  // Function to navigate to the book details page
  const handleBookSelect = (book) => {
    const bookId = book.id;
    navigate(`/books/${bookId}`, { state: { book } }); // Navigate to the book details page with the book data
  };

  return (
    <div className="bg-transparent min-h-full">
      {/* Navbar component */}
      <Navbar />
      {/* Toast notification container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      {/* Hero Section */}
      <HeroSection />
      {/* Search Bar */}
      <SearchBar onSearch={searchBooks} />
      {/* Display loader while books are being fetched */}
      {loading && <Loader />}
      {/* Display error message if there's an error */}
      {error && <p className="text-red-500 text-center text-xl">{error}</p>}
      <div className="container mx-auto p-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Map through the books and display each as a BookCard component */}
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelect={() => handleBookSelect(book)} // Handle book selection
              onSave={() => saveBook(book)} // Handle saving or removing a book
              isSaved={savedBooks.includes(book.id)} // Check if the book is already saved
            />
          ))}
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

// MainApp Component to handle routing
const MainApp = () => {
  const [books, setBooks] = useState([]); // Book state (can be passed globally)
  const [savedBooks, setSavedBooks] = useState([]); // Saved book state

  return (
    <Router>
      {/* Define the routes for the app */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Main App Route */}
        <Route path="/books/:bookId" element={<BookDetailPage />} /> {/* Book Detail Page */}
        <Route path="/my-books" element={<MyBooksPage />} /> {/* My Books Page */}
        <Route path="/about" element={<AboutPage />} /> {/* About Page */}
        <Route path="/contact" element={<ContactPage />} /> {/* Contact Page */}
      </Routes>
    </Router>
  );
};

export default MainApp;
