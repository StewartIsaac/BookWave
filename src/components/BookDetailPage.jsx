import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookDetails from "./BookDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BookDetailPage = () => {
  const location = useLocation(); // Get the location object
  const book = location.state?.book;  // Get the book from the passed state
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-transparent min-h-screen">
      <Navbar />
      <div className="container mx-auto my-20 w-full md:w-2/3">
        {book ? (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <BookDetails book={book} onClose={handleClose} />
          </div>
        ) : (
          <p className="text-red-500 text-center text-2xl mx-auto my-50">Book not found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BookDetailPage;
