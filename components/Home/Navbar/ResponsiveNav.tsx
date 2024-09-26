"use client";

import React, { useState } from 'react';
import Nav from './Nav'; // Ensure you have this import
import MobileNav from './MobileNav'; // Ensure you have this import

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav  showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
