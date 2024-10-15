import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io"; // check icon

const ContactPage = () => {
  // State to manage form inputs and validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Regex patterns for validation
  const nameRegex = /^[a-zA-Z\s]{2,}$/; // At least 2 letters
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the corresponding field in formData
    }));
    setErrors({ ...errors, [name]: "" }); // Clear error for the current field
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    let validationErrors = {};
    if (!nameRegex.test(formData.name)) {
      validationErrors.name = "Please enter a valid name.";
    }
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) {
      validationErrors.message = "Message cannot be empty.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
      setSubmitted(false); // Don't show success message if there are errors
      return;
    }

    // Simulate form submission
    setSubmitted(true); // Show success message
    setFormData({
      name: "",
      email: "",
      message: "",
    }); // Reset form
    setErrors({});
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-transparent p-6">
        {/* Page Header */}
        <h2 className="text-3xl font-bold mt-20 mb-4">Get in Touch</h2>

        {/* Contact Links */}
        <div className="flex flex-col items-center justify-center space-y-4 md:gap-20 mt-8 mb-16 md:flex-row">
          {/* Email */}
          <a
            href="mailto:stewartisaac9@gmail.com"
            className="flex items-center space-x-2 font-sans text-green-500 hover:text-green-800 transition-colors mt-4"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-xl font-sans">stewartisaac9@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/stewartisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-500 hover:text-green-800 transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-xl font-sans">LinkedIn</span>
          </a>

          {/* GitHub */}
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
          <p className="text-xl font-bold mt-5">Send us a message</p>

          {/* Name Input */}
          <div className="mb-4">
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
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Input */}
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
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Input */}
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
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button and Confirmation Message */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
            {submitted && <div className="flex flex-row align-center justify-center"><IoMdCheckmarkCircleOutline className="text-sm md:text-xl text-blue-500 mt-0.5 md:mt-1.5" /> <p className="text-blue-500  ml-4 text-sm md:text-xl">Message sent successfully!</p></div>}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
