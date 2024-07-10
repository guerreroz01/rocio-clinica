import { banner01 } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BannerSection01() {
  return (
    <section flex-wrapsection className="w-full bg-white py-20 text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row justify-around gap-10">
        {banner01.map((element, i) => (
          <article
            key={`article-banner-${element.linkTitle}-${i}`}
            className="flex flex-col items-center w-80 h-96 gap-6 pt-10 pb-10 border border-gray-400 rounded-2xl"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={element.image}
                alt=""
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-center"
                style={{ objectFit: "cover" }}
              />
            </div>
            <Link href={element.href} className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                {element.linkTitle}
              </h3>
            </Link>
            <p className="text-center px-6 font-semibold">
              {element.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BannerSection01;
