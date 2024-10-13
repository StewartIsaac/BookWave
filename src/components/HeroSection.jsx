import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="text-center pt-24 pb-6 px-4"
    >
      <div className="container mx-auto">
        <img className="w-14 mx-auto md:w-20" src="/logo-g.png" />
        <h1 className="text-4xl font-bold mb-4 md:text-6xl">
          Welcome to BookWave
        </h1>
        <p className="text-xl text-gray-900 max-w-[600px] text-center mx-auto">
          Discover your next favorite book with our extensive collection of titles, from timeless classics to modern bestsellers.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
