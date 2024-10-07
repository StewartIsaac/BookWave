import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { TiArrowBack } from "react-icons/ti";

const BookDetails = ({ book, onClose }) => {
  // Construct the read URL using Open Library's Read API
  const readLink = `https://openlibrary.org/books/${book.cover_edition_key || book.key}/`;

  return (
    <div className="mx-auto p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        alt={book.title}
        className="mb-6 w-full max-w-xs mx-auto rounded"
      />
      <p className="mb-4">
        <strong>Author(s):</strong> {book.author_name?.join(", ") || "Unknown"}
      </p>
      <p className="mb-4">
        <strong>Publisher:</strong> {book.publisher?.join(", ") || "Unknown"}
      </p>
      <p className="mb-4">
        <strong>First Published:</strong> {book.first_publish_year || "N/A"}
      </p>
      <p className="mb-4">
        <strong>Number of Pages:</strong> {book.number_of_pages_median || "N/A"}
      </p>
      <p className="mb-4">
        <strong>ISBN:</strong> {book.isbn ? book.isbn.join(", ") : "N/A"}
      </p>

      {/* "Read Now" Button */}
      <div className="mt-4 flex">
        <a
          href={readLink}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row gap-2 align-center justify-center">
            <span>Read Now</span><FaBookOpenReader className="w-4 h-4 fill-white" />
          </div>
        </a>
      </div>
      {/* Close button */}
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 flex flex-row gap-2"
        onClick={onClose}
      >
        <TiArrowBack className="w-6 h-6 fill-white" />Go Back
      </button>
    </div>
  );
};

export default BookDetails;
