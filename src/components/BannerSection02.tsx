import React from "react";
import CaserSvg from "./CaserSvg";
import Image from "next/image";
import { asssaImg, canalSaludImg, sosLogoImg } from "@/constants";
import SantaLuciaSvg from "./SantaLuciaSvg";
import Link from "next/link";

function BannerSection02() {
  return (
    <section className="w-full flex flex-col justify-center items-center h-[600px] md:h-[400px] ">
      <h4 className="xl:-mb-20 text-4xl font-semibold text-gray-800">
        Partners
      </h4>
      <article className="w-full max-w-7xl  md:h-full flex flex-wrap justify-center items-center mx-auto gap-6">
        <Link href="https://www.caser.es/seguros-dentales" className=" w-1/3">
          <CaserSvg />
        </Link>
        <Link href="https://www.internationalsos.es/" className="">
          <Image src={sosLogoImg} width={140} height={140} alt="" />
        </Link>
        <Link href="https://www.canalsalud24.com/" className="">
          <Image src={canalSaludImg} width={240} height={240} alt="" />
        </Link>
        <Link href="https://www.santalucia.es/" className="">
          <SantaLuciaSvg height={40} width={150} />
        </Link>
        <Link href="https://www.asssa.es/" className="">
          <Image src={asssaImg} width={200} height={200} alt="" />
        </Link>
      </article>
    </section>
  );
}

export default BannerSection02;
