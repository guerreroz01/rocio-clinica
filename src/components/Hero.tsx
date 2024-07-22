import React from "react";
import Image from "next/image";
import { heroImg, heroTextContent } from "@/constants";
import { FaAsterisk } from "react-icons/fa";
import Chip from "./Chip";
import Btn01 from "./Btn01";
import { roboto_mono } from "@/fonts";

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      <Image
        src={heroImg}
        alt="Hero Image"
        className="absolute top-0 left-0 right-0 -z-10 object-center h-full w-full"
        style={{ objectFit: "cover" }}
      />
      <div className="flex items-end w-full h-full z-50 justify-between max-w-[1920px] pl-0 md:pr-6">
        <div className="h-full flex items-end bg-gradient-to-r from-black/60">
          <div className=" w-full md:max-w-3xl px-2 md:px-10 md:pt-20 pb-4 md:pb-10 xl:mr-28 ">
            <div className="hidden md:flex items-center gap-6 px-6 max-w-lg">
              <FaAsterisk size={50} className="text-white/90" />
              <p className="text-xl lg:text-2xl font-semibold text-white/90">
                {heroTextContent.subtitle}
              </p>
            </div>
            <h1
              className={`text-4xl lg:text-6xl my-10 font-bold ${roboto_mono.className}`}
            >
              {heroTextContent.title}
            </h1>
            <div className="hidden lg:flex flex-wrap gap-6 mt-24 mb-6">
              {heroTextContent.links.map((element, i) => (
                <Chip
                  key={`hero-text-content-link-${i}-${element.title}`}
                  title={element.title}
                  href={element.href}
                />
              ))}
            </div>
            <div className="hidden lg:flex">
              <p className="text-lg text-white">{heroTextContent.parragraph}</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex backdrop-blur-lg bg-gray-600/30 rounded-3xl mb-10 max-w-xs w-1/3 mr-24 flex-col items-center pt-20">
          <div className="relative overflow-hidden  w-60 h-60 rounded-full mb-10">
            <Image
              src={heroTextContent.promotion.img}
              alt={heroTextContent.promotion.title}
              className="absolute top-0 left-0 right-0 bottom-0 object-center w-full h-full"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className=" text-md text-center px-10">
            {heroTextContent.promotion.title}
          </p>
          <div className="py-10">
            <Btn01
              title={heroTextContent.promotion.linkTitle}
              href={heroTextContent.promotion.href}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
