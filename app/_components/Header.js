"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  const [show, setShow] = useState(true); // header visibility
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setShow(true); // always show at top
      } else if (currentScroll > lastScroll) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-transform duration-300 
        ${show ? "translate-y-0" : "-translate-y-30"}
        bg-charcoal-900/75 shadow-md flex items-center justify-between px-8 py-2`}
    >
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
