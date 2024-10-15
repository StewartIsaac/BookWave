import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { TiArrowBack } from "react-icons/ti";
import { toast } from "react-toastify";

const BookDetails = ({ book, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);
  const volumeInfo = book.volumeInfo || {}; // Extract book info

  // Check if the book is already saved in localStorage
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setIsSaved(savedBooks.some(savedBook => savedBook.id === book.id));
  }, [book.id]);

  // Save or remove a book from 'My Books'
  const handleSaveBook = () => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    if (!isSaved) {
      savedBooks.push(book);
      localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
      toast.success(`${volumeInfo.title || "Book"} saved to My Books!`);
    } else {
      const updatedBooks = savedBooks.filter(savedBook => savedBook.id !== book.id);
      localStorage.setItem("savedBooks", JSON.stringify(updatedBooks));
      toast.error(`${volumeInfo.title || "Book"} removed from My Books.`);
    }
    setIsSaved(!isSaved);
  };

  // Extract book details with fallbacks for missing data
  const title = volumeInfo.title || "No Title Available";
  const authors = volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown Author";
  const publisher = volumeInfo.publisher || "Unknown Publisher";
  const publishedDate = volumeInfo.publishedDate || "Unknown Date";
  const description = volumeInfo.description || "No description available.";
  const pageCount = volumeInfo.pageCount || "N/A";
  const isbn = volumeInfo.industryIdentifiers ?
    volumeInfo.industryIdentifiers.map(id => `${id.type}: ${id.identifier}`).join(", ")
    : "N/A";
  const categories = volumeInfo.categories ? volumeInfo.categories.join(", ") : "N/A";
  const readLink = volumeInfo.previewLink || `https://books.google.com/`;

  return (
    <div className="mx-auto p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <img
        src={volumeInfo.imageLinks?.thumbnail || "default-image.jpg"}
        alt={title}
        className="mb-6 w-full max-w-xs mx-auto rounded"
      />

      <p className="mb-4"><strong>Author(s):</strong> {authors}</p>
      <p className="mb-4"><strong>Publisher:</strong> {publisher}</p>
      <p className="mb-4"><strong>Published Date:</strong> {publishedDate}</p>
      <p className="mb-4"><strong>Page Count:</strong> {pageCount}</p>
      <p className="mb-4"><strong>ISBN:</strong> {isbn}</p>
      <p className="mb-4"><strong>Categories:</strong> {categories}</p>
      <p className="mb-4"><strong>Description:</strong> {description}</p>

      <div className="mt-4 flex">
        <a
          href={readLink}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row gap-2">
            <span>Read Now</span> <FaBookOpenReader />
          </div>
        </a>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 flex flex-row gap-2"
        onClick={handleSaveBook}
      >
        {isSaved ? <FaBookmark className="w-6 h-6" /> : <FaRegBookmark className="w-6 h-6" />}
        {isSaved ? "Remove from My Books" : "Save to My Books"}
      </button>

      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 flex flex-row gap-2"
        onClick={onClose}
      >
        <TiArrowBack /> Go Back
      </button>
    </div>
  );
};

export default BookDetails;
