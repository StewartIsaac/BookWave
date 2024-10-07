import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-transparent p-6">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:youremail@example.com"
            className="flex items-center space-x-2 font-sans text-green-500 hover:text-green-800 transition-colors"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-xl font-sans">stewartisaac9@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/stewartisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-500 hover:text-green-800 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
            <span className="text-xl font-sans">LinkedIn</span>
          </a>
          <a
            href="https://github.com/stewartisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-500 hover:text-green-800 transition-colors"
          >
            <FaGithub className="text-2xl" />
            <span className="text-xl font-sans">GitHub</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
