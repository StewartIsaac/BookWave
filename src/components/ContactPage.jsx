import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Simulate form submission (Here you can integrate an email service)
    toast.success("Message sent successfully!");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-transparent p-6">
        <h2 className="text-3xl font-bold mt-20 mb-4 ">Get in Touch</h2>
        <div className="flex flex-col items-center justify-center space-y-4 md:gap-20 mt-8 mb-16 md:flex-row">
          <a
            href="mailto:stewartisaac9@gmail.com"
            className="flex items-center space-x-2 font-sans text-green-500 hover:text-green-800 transition-colors mt-4"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-xl font-sans">stewartisaac9@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/stewartisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-500 hover:text-green-800 transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-xl font-sans">LinkedIn</span>
          </a>
          <a
            href="https://github.com/stewartisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-500 hover:text-green-800 transition-colors"
          >
            <FaGithub className="text-xl" />
            <span className="text-xl font-sans">GitHub</span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-20 w-full md:max-w-2xl max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <p className="text-xl font-bold mt-5">Send us a message</p>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
