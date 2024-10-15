import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { GoNoEntry } from "react-icons/go";

const MyBooksPage = () => {
  // State to store saved books from localStorage
  const [savedBooks, setSavedBooks] = useState([]);

  // Fetch saved books from localStorage when the component mounts
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setSavedBooks(storedBooks);
  }, []);

  // Handle removing a book from the saved list
  const handleRemoveBook = (book) => {
    // Filter out the book to be removed
    const updatedBooks = savedBooks.filter((savedBook) => savedBook.id !== book.id);

    // Update localStorage with the new list of saved books
    localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));

    // Update the state with the new list
    setSavedBooks(updatedBooks);

    // Show a toast notification
    toast.info(`${book.volumeInfo?.title || "Book"} removed from My Books.`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 my-20">
        {/* Page Header */}
        <h1 className="text-3xl font-bold mt-20 mb-10 text-center">My Books</h1>

        {/* If there are saved books, display them */}
        {savedBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onRemoveBook={() => handleRemoveBook(book)}
              />
            ))}
          </div>
        ) : (
          // If no books are saved, display a message with an icon
          <div className="flex flex-col justify-center items-center">
            <GoNoEntry className="text-4xl text-gray-500" />
            <p className="text-center text-xl mt-4 mb-20">No saved books yet.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBooksPage;
