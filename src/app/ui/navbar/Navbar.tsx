"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../../../public/icon/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`bg-white dark:bg-black p-3 shadow-lg fixed w-full transition-transform duration-300 z-50 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex lg:flex-row justify-between items-center">
          <div className="flex px-5">
            <Image src={logo} width={50} height={25} alt="Logo" />
          </div>

          {/* Hamburger menu for small screens */}
          <div className="lg:hidden">
            {!isOpen && (
              <button
                onClick={toggleMenu}
                className="text-black dark:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <div
            className={`lg:flex flex-col lg:flex-row text-sm uppercase font-bold tracking-wider ${
              isOpen ? "block" : "hidden"
            } lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-base dark:text-gray-200`}
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
              className="cursor-pointer px-4 py-2 hover:text-sky-800 transition-colors"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
              className="cursor-pointer px-4 py-2 hover:text-sky-800 transition-colors"
            >
              About
            </ScrollLink>

            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
              className="cursor-pointer px-4 py-2 hover:text-sky-800 transition-colors"
            >
              Experience
            </ScrollLink>

            <ScrollLink
              to="technologies"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
              className="cursor-pointer px-4 py-2 hover:text-sky-800 transition-colors"
            >
              Technologies
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
              className="cursor-pointer px-4 py-2 hover:text-sky-800 transition-colors"
            >
              Projects
            </ScrollLink>

            <ScrollLink
              to="contact"
              className="cursor-pointer transition-colors px-4 py-2 hover:text-sky-800"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>

            <div className="flex justify-center items-center m-auto">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  closeMenu();
                }}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <LuSunMoon size={20} />
                ) : (
                  <BsMoonStars size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
