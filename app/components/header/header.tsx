"use client";

import React, { useState } from "react";
import DesktopMenu from "../DesktopMenu/desktopMenu";
import MobileMenu from "../MobileMenu/mobileMenu";

const Header: React.FC = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <header className="bg-white sticky top-0 z-10 px-5">
      <DesktopMenu setMobileView={setMobileView} mobileView={mobileView} />
      {mobileView && <MobileMenu />}
    </header>
  );
};

export default Header;
