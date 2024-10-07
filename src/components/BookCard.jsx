import React from "react";

const BookCard = ({ book, onSelect }) => {
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div
      className="w-[300px] p-6 rounded-lg bg-white cursor-pointer shadow-md hover:shadow-2xl mx-auto mb-2"
      onClick={onSelect}
    >
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.truncateTitle}
        className="mb-2 rounded w-full"
      />
      <div className="relative group">
        <h3 className="font-bold text-2xl font-sans">{truncateTitle(book.title, 40)}</h3>

        <div className="absolute opacity-0 w-[300px] group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white text-gray-700 p-2 rounded-md shadow-2xl border border-green-200 top-full left-1/2 transform -translate-x-1/3 z-10 whitespace-wrap">
          {book.title}
        </div>
      </div>
      <p className="opacity-70 font-medium">{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
    </div>
  );
};

export default BookCard;
