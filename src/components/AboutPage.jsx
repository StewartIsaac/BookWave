import React from "react";
import Navbar from "./Navbar";  // Import the Navbar component
import Footer from "./Footer";  // Import the Footer component
import { FaLinkedin, FaGithub } from "react-icons/fa";  // Import LinkedIn and GitHub icons

const AboutPage = () => {
  return (
    <>
      {/* Include the Navbar at the top */}
      <Navbar />

      {/* Main container for the about page content */}
      <div className="container mx-auto p-4 mt-10 text-center max-w-[85%] md:max-w-[75%]">

        {/* Logo of the application */}
        <img src="/logo-g.png" alt="BookWave Logo" className="w-14 m-auto mt-20 md:w-20" />

        {/* Heading for the About section */}
        <h1 className="text-4xl font-bold mb-4">About BookWave</h1>

        {/* Introduction to the app's purpose */}
        <p className="mb-4">
          Welcome to BookWave! This application is designed to help book lovers discover new titles, authors, and genres.
          With a user-friendly interface and access to a vast library of books, you can easily search for your next read
          and explore detailed information about each book.
        </p>

        {/* Further description of the app's features */}
        <p className="mb-4">
          Whether you're looking for fiction, non-fiction, or academic texts, BookWave is here to assist you on your literary journey.
          Our goal is to provide a platform that connects readers with the stories they love.
        </p>

        {/* Author section */}
        <h2 className="text-2xl font-bold mb-2 mt-20">About the Author</h2>

        {/* Flexbox container for author details */}
        <div className="flex flex-col text-center items-center mb-4 md:max-w-[60%] m-auto">

          {/* Author's image */}
          <img src="/author.jpg" alt="Author" className="rounded-full mr-4 w-40" />

          {/* Author's description */}
          <div>
            <p className="text-base mt-2">
              Hello! I'm <b>Gabriel Isaac</b>, the creator of BookWave. I'm passionate about reading and technology, and I built
              this app to share my love for books with others. I believe that every great story deserves to be discovered, and I
              hope you find something wonderful here!
            </p>
          </div>

          {/* Social media links (LinkedIn and GitHub) */}
          <div className="flex flex-row items-center gap-2 mb-20">

            {/* LinkedIn profile link */}
            <a
              href="https://www.linkedin.com/in/stewartisaac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:text-green-800 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>

            {/* GitHub profile link */}
            <a
              href="https://github.com/stewartisaac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:text-green-800 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>

          </div>
        </div>
      </div>

      {/* Include the Footer at the bottom */}
      <Footer />
    </>
  );
};

export default AboutPage;
