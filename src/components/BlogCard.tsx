import Image, { StaticImageData } from "next/image";
import React from "react";
import Btn01 from "./Btn01";
import Link from "next/link";

interface BlogCardInt {
  title: string;
  tag: string;
  description: string;
  chip: string;
  href: string;
  image: StaticImageData;
}

function BlogCard({ chip, description, href, image, tag, title }: BlogCardInt) {
  return (
    <article className="w-full md:w-1/3 h-[600px] flex flex-col justify-between gap-2">
      <div className="relative  w-full h-[250px] overflow-hidden">
        <Image
          src={image}
          alt=""
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-center"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-0 bg-white text-gray-600 px-2 py-1 font-semibold rounded-tr-xl">
          {chip}
        </div>
      </div>
      <Link href={href} className="mb-auto px-4 md:px-0">
        <h3 className="text-2xl font-semibold text-gray-800 py-4 ">{title}</h3>
        <p className="text-lg text-gray-600 text-justify">{description}</p>
      </Link>
      <div className="self-center mb-10 md:mb-0">
        <Btn01 title="Seguir leyendo.." href={href} classNames="shadow-lg" />
      </div>
    </article>
  );
}

export default BlogCard;
