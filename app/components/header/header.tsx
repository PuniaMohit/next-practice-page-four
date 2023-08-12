import React from 'react';
import logo from "../../assets/logo.png"
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white flex items-center justify-between p-4 sticky top-0 z-10">
      <div className="flex items-center w-full">
        <Image
          src={logo}
          alt="Logo"
          className="w-20 h-20"
        />
        <div className="flex ml-auto gap-4">
          <div className="px-2 py-1 text-black">Home</div>
          <div className="px-2 py-1 text-black">About Us</div>
          <div className="px-2 py-1 text-black">Software Development</div>
          <div className="px-2 py-1 text-black">Managed Services</div>
          <div className="px-2 py-1 text-black">Consulting</div>
          <div className="px-2 py-1 bg-blue-200 text-white">Contact Us</div>
        </div>
      </div>
    </header>
  );
};

export default Header;