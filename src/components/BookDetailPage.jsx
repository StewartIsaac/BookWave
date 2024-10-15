import React from "react";
import { useLocation, useNavigate } from "react-router-dom";  // Import React Router hooks
import BookDetails from "./BookDetails";  // Import BookDetails component
import Navbar from "./Navbar";  // Import Navbar component
import Footer from "./Footer";  // Import Footer component

const BookDetailPage = () => {
  const location = useLocation();  // Hook to get the current location object
  const book = location.state?.book;  // Get the 'book' object passed through the state
  const navigate = useNavigate();  // Hook to navigate programmatically

  // Function to handle closing the book detail page and go back to the previous page
  const handleClose = () => {
    navigate(-1);  // Navigate back to the previous page in the history stack
  };

  return (
    <div className="bg-transparent min-h-screen">
      {/* Navbar component for consistent header across pages */}
      <Navbar />
      <div className="container mx-auto my-20 w-full md:w-2/3">
        {book ? (
          // If a book is found, render the BookDetails component
          <div className="bg-white shadow-lg rounded-lg p-6">
            <BookDetails book={book} onClose={handleClose} />  {/* Pass the book and onClose handler */}
          </div>
        ) : (
          // If no book is found in state, show an error message
          <p className="text-red-500 text-center text-2xl mx-auto my-50">
            Book not found.
          </p>
        )}
      </div>
      {/* Footer component for consistent footer across pages */}
      <Footer />
    </div>
  );
};

export default BookDetailPage;
