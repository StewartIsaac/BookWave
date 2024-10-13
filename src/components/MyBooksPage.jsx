import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { GoNoEntry } from "react-icons/go";

const MyBooksPage = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setSavedBooks(storedBooks);
  }, []);

  const handleRemoveBook = (book) => {
    const updatedBooks = savedBooks.filter((savedBook) => savedBook.id !== book.id);
    localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
    setSavedBooks(updatedBooks);
    toast.info(`${book.volumeInfo?.title || "Book"} removed from My Books.`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 my-20">
        <h1 className="text-3xl font-bold mt-20 mb-10 text-center">My Books</h1>
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
