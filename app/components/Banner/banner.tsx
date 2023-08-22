import React from "react";
import "./banner.css";

const Banner: React.FC = () => {
  return (
    <div className="w-full h-4/5 bg-cover bg-center flex justify-center items-center text-white banner-picture relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <div className="flex flex-col items-center mt-5 mb-5 relative z-10">
        <div className="md:flex items-center mt-10 mb-10">
          <h1 className="we-font font-bold mr-2 text-opacity-60 text-overlay">
            WE
          </h1>
          <div className="flex flex-col">
            <span className="xs:text-5xl md:text-6xl text-opacity-60">
              INNOVATE
            </span>
            <span className="xs:text-5xl md:text-6xl text-opacity-60">
              ASSOCIATE
            </span>
            <span className="xs:text-5xl md:text-6xl text-opacity-60">
              INSPIRE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
