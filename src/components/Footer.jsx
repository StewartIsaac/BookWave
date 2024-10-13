import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tl from-green-500 to-green-700 text-white p-4">
      <div className="container flex flex-col items-center justify-center inset-x-0 bottom-0 mx-auto md:flex-row md:justify-between">
        <div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} BookWave. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center self-center md:flex-row">
          <p>Developed by Gabriel Isaac</p>
          <div className="flex flex-row gap-4 -mt-3">
            <a
              href="https://www.linkedin.com/in/stewartisaac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/StewartIsaac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

