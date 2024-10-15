import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";  // Import bookmark icons
import { toast } from "react-toastify";  // Import toast for notifications

const BookCard = ({ book, onSelect, onRemoveBook }) => {
  const [isSaved, setIsSaved] = useState(false);  // State to track if the book is saved

  // UseEffect to check if the book is saved in localStorage when the component mounts
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];  // Fetch saved books from localStorage
    setIsSaved(savedBooks.some((savedBook) => savedBook.id === book.id));  // Check if the current book is already saved
  }, [book.id]);  // Dependency on book.id to update if the book changes

  // Function to handle saving/removing the book from localStorage
  const handleSaveBook = () => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];  // Fetch saved books

    if (!isSaved) {
      // Save book if not already saved
      savedBooks.push(book);
      localStorage.setItem("savedBooks", JSON.stringify(savedBooks));  // Update localStorage
      toast.success(`${book.volumeInfo?.title || "Book"} saved to My Books!`);  // Show success toast
    } else {
      // Remove book if already saved
      const updatedBooks = savedBooks.filter((savedBook) => savedBook.id !== book.id);  // Remove book by id
      localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));  // Update localStorage
      toast.error(`${book.volumeInfo?.title || "Book"} removed from My Books.`);  // Show error toast
    }
    setIsSaved(!isSaved);  // Toggle the isSaved state
  };

  // Helper function to truncate long titles
  const truncateTitle = (title, maxLength) =>
    title.length > maxLength ? title.slice(0, maxLength) + "..." : title;

  // Extract authors and handle unknown authors
  const authors = book.volumeInfo?.authors
    ? book.volumeInfo.authors.join(", ")
    : "Unknown Author";

  // Handle book cover image, with fallback to default image
  const thumbnail = book.volumeInfo?.imageLinks?.thumbnail || "default-image.jpg";

  return (
    <div className="w-[300px] p-6 rounded-lg bg-white cursor-pointer shadow-md hover:shadow-2xl mx-auto mb-4 relative">
      {/* Book Image */}
      <img
        src={thumbnail}
        alt={truncateTitle(book.volumeInfo?.title || "No Title", 40)}
        className="mb-2 rounded w-full"
        onClick={onSelect}  // Trigger onSelect callback when book image is clicked
      />

      {/* Save Button (Bookmark Icon) */}
      <button
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg backdrop-blur-lg"
        onClick={handleSaveBook}  // Trigger the handleSaveBook function when clicked
      >
        {isSaved ? (
          <FaBookmark className="text-red-600 w-5 h-5" />  // Show filled bookmark if saved
        ) : (
          <FaRegBookmark className="text-gray-600 w-5 h-5" />  // Show outlined bookmark if not saved
        )}
      </button>

      {/* Book Title and Authors */}
      <h3 className="font-bold text-2xl">
        {truncateTitle(book.volumeInfo?.title || "No Title", 40)}  {/* Display truncated title */}
      </h3>
      <p className="opacity-70 font-medium">{truncateTitle(authors, 30)}</p>  {/* Display truncated authors */}

      {/* Remove Button (optional) */}
      {onRemoveBook && (
        <button
          onClick={onRemoveBook}  // Trigger the onRemoveBook callback when clicked
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default BookCard;
