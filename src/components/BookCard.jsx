import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const BookCard = ({ book, onSelect, onRemoveBook }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setIsSaved(savedBooks.some((savedBook) => savedBook.id === book.id));
  }, [book.id]);

  const handleSaveBook = () => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    if (!isSaved) {
      savedBooks.push(book);
      localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
      toast.success(`${book.volumeInfo?.title || "Book"} saved to My Books!`);
    } else {
      const updatedBooks = savedBooks.filter((savedBook) => savedBook.id !== book.id);
      localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
      toast.error(`${book.volumeInfo?.title || "Book"} removed from My Books.`);
    }
    setIsSaved(!isSaved);
  };

  const truncateTitle = (title, maxLength) =>
    title.length > maxLength ? title.slice(0, maxLength) + "..." : title;

  const authors = book.volumeInfo?.authors
    ? book.volumeInfo.authors.join(", ")
    : "Unknown Author";

  const thumbnail = book.volumeInfo?.imageLinks?.thumbnail || "default-image.jpg";

  return (
    <div className="w-[300px] p-6 rounded-lg bg-white cursor-pointer shadow-md hover:shadow-2xl mx-auto mb-4 relative">
      {/* Book Image */}
      <img
        src={thumbnail}
        alt={truncateTitle(book.volumeInfo?.title || "No Title", 40)}
        className="mb-2 rounded w-full"
        onClick={onSelect}
      />

      {/* Save Button */}
      <button
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg backdrop-blur-lg"
        onClick={handleSaveBook}
      >
        {isSaved ? (
          <FaBookmark className="text-red-600 w-5 h-5" />
        ) : (
          <FaRegBookmark className="text-gray-600 w-5 h-5" />
        )}
      </button>

      {/* Book Title and Authors */}
      <h3 className="font-bold text-2xl">
        {truncateTitle(book.volumeInfo?.title || "No Title", 40)}
      </h3>
      <p className="opacity-70 font-medium">{truncateTitle(authors, 30)}</p>

      {/* Remove Button */}
      {onRemoveBook && (
        <button
          onClick={onRemoveBook}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default BookCard;
