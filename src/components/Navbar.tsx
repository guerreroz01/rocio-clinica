"use client";
import React, { useEffect, useState } from "react";
import { logoHomeLink, navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Btn01 from "./Btn01";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [navbarDark, setNavbarDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarDark(true);
      } else {
        setNavbarDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full transition-colors duration-300 z-30
    
          ${navbarDark ? "bg-black" : "bg-gradient-to-b from-black"}
    `}
    >
      <nav className="text-white flex w-full justify-between items-center px-4 xl:px-40 py-4 z-20 ">
        <Link href={logoHomeLink.href}>
          <Image width={80} src={logoHomeLink.image} alt="Logo" />
        </Link>
        <ul className="hidden md:flex gap-6 flex-1 justify-around lg:justify-between max-w-[600px] ">
          {navLinks.map((element) => (
            <li key={element.name}>
              {" "}
              <Link
                href={element.href}
                className="uppercase text-xs font-semibold hover:font-bold px-2 py-1"
              >
                {element.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <Btn01
            title="Pide tu cita"
            href="/"
            classNames="border-active hover:bg-active"
          />
        </div>
        <div
          className="flex md:hidden cursor-pointer"
          onClick={() => setIsMobile(!isMobile)}
        >
          <RxHamburgerMenu size={40} color="#fff" />
        </div>
      </nav>
      {/* NAV-MOBILE */}
      <div
        className={`absolute top-0 bottom-0 bg-black w-full h-screen z-50 transition-all duration-300 flex flex-col justify-between
          ${isMobile ? "left-0" : " -left-full"}`}
      >
        <div className="w-full flex justify-between items-center p-2">
          <Link href={logoHomeLink.href}>
            <Image width={100} src={logoHomeLink.image} alt="Logo" />
          </Link>
          <div
            className="flex md:hidden cursor-pointer"
            onClick={() => setIsMobile(!isMobile)}
          >
            <IoMdClose size={40} color="#fff" />
          </div>
        </div>
        <h3 className="text-white text-center">
          Clínica Dental Sonia García hacer logo
        </h3>
        <ul className="flex flex-col w-full h-1/2 px-4 justify-around">
          {navLinks.map((element) => (
            <li key={element.name}>
              {" "}
              <Link
                href={element.href}
                className="uppercase text-3xl font-semibold hover:font-bold px-2 py-1 text-white"
              >
                {element.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="self-center py-20">
          <Btn01
            title="Pide tu cita!"
            href="/"
            classNames="text-white bg-active"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
