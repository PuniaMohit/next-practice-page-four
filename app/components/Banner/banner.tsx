import React from "react";
import "./banner.css";

const Banner: React.FC = () => {
  return (
    <div
      className="w-full h-4/5 bg-cover bg-center flex justify-center items-center text-white"
      style={{
        backgroundImage: `url('/Asia-business-meetings.jpg')`,
      }}
    >
      <div className=" flex flex-col items-center mt-5 mb-5">
        <div className="flex items-center mt-10 mb-10">
          <h1 className="we-font font-bold mr-2">WE</h1>
          <div className="flex flex-col">
            <span className="text-6xl">INNOVATE</span>
            <span className="text-6xl">ASSOCIATE</span>
            <span className="text-6xl">INSPIRE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
