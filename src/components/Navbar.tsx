"use client";
import React, { useEffect, useState } from "react";
import { logoHomeLink, navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Btn01 from "./Btn01";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [navbarDark, setNavbarDark] = useState(false);

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
          <Image width={100} src={logoHomeLink.image} alt="Logo" />
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
            className="border-active hover:bg-active"
          />
        </div>
        <div className="flex md:hidden">
          <RxHamburgerMenu size={40} color="#fff" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
