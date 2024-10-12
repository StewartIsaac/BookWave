import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-0 content-center justify-center bg-gradient-to-tl from-green-500 to-green-700 text-white text-center p-4 mt-4 md:flex-row md:gap-52 absolute inset-x-0 bottom-0">
      <p>&copy; {new Date().getFullYear()} Book Library. All rights reserved.</p>
      <p>Made with ❤️ by <a className="text-bold font-bold font-sans hover:opacity-70" href="http://github.com/stewartisaac/" target="_blank" rel="noopener noreferrer">Gabriel Isaac</a></p>
    </footer>
  );
};

export default Footer;
