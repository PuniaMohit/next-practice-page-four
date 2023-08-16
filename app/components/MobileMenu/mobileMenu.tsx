import React from "react";
import Link from "next/link";
import menuItems from "../../json-data/menuItems.json";

interface MenuItem {
  label: string;
  link: string;
  className?: string;
}

const MobileMenu = () => {
  return (
    <div className="sm:flex-none xs:visible sm:invisible md:flex ml-auto gap-4">
      {menuItems.map((menuItem: MenuItem, index: number) => (
        <div key={index}>
          <Link
            href={menuItem.link}
            className={`px-2 py-1 text-black ${menuItem.className || ""}`}
          >
            {menuItem.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
