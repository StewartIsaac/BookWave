import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";  // Import bookmark icons
import { FaBookOpenReader } from "react-icons/fa6";  // Import book reading icon
import { TiArrowBack } from "react-icons/ti";  // Import back arrow icon
import { toast } from "react-toastify";  // Import toast for notifications

const BookDetails = ({ book, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);  // State to track if the book is saved
  const volumeInfo = book.volumeInfo || {};  // Extract book info or default to empty object

  // Check if the book is already saved in localStorage when the component mounts
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setIsSaved(savedBooks.some(savedBook => savedBook.id === book.id));
  }, [book.id]);

  // Function to handle saving or removing a book from 'My Books'
  const handleSaveBook = () => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    if (!isSaved) {
      // Save the book if it's not already saved
      savedBooks.push(book);
      localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
      toast.success(`${book.volumeInfo?.title || "Book"} saved to My Books!`);
    } else {
      // Remove the book if it's already saved
      const updatedBooks = savedBooks.filter(savedBook => savedBook.id !== book.id);
      localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
      toast.error(`${book.volumeInfo?.title || "Book"} removed from My Books.`);
    }
    setIsSaved(!isSaved);  // Toggle the saved state
  };

  // Extract book details with fallbacks for missing data
  const title = volumeInfo.title || "No Title Available";
  const authors = volumeInfo.authors
    ? volumeInfo.authors.join(", ")
    : "Unknown Author";
  const readLink = volumeInfo.previewLink || `https://books.google.com/`;  // Fallback read link

  return (
    <div className="mx-auto p-6 rounded-lg">
      {/* Book title */}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      {/* Book cover image */}
      <img
        src={volumeInfo.imageLinks?.thumbnail || "default-image.jpg"}
        alt={title}
        className="mb-6 w-full max-w-xs mx-auto rounded"
      />

      {/* Book authors */}
      <p className="mb-4">
        <strong>Author(s):</strong> {authors}
      </p>

      {/* 'Read Now' button linking to the book's preview */}
      <div className="mt-4 flex">
        <a
          href={readLink}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row gap-2">
            <span>Read Now</span> <FaBookOpenReader />  {/* Icon for reading */}
          </div>
        </a>
      </div>

      {/* Save/Remove button to toggle book saving status */}
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 flex flex-row gap-2"
        onClick={handleSaveBook}
      >
        {isSaved ? (
          <FaBookmark className="w-6 h-6" />  // Filled bookmark icon if saved
        ) : (
          <FaRegBookmark className="w-6 h-6" />  // Empty bookmark icon if not saved
        )}
        {isSaved ? "Remove from My Books" : "Save to My Books"}  {/* Toggle button text */}
      </button>

      {/* Back button to close the details view and return to the previous page */}
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 flex flex-row gap-2"
        onClick={onClose}
      >
        <TiArrowBack /> Go Back  {/* Back arrow icon */}
      </button>
    </div>
  );
};

export default BookDetails;
