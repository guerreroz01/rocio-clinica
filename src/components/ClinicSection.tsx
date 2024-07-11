import { clinicInfo } from "@/constants";
import Image from "next/image";
import React from "react";
import Chip from "./Chip";

function ClinicSection() {
  return (
    <section className="w-full flex  h-[700px] justify-center items-center ">
      <div className="max-w-7xl h-full md:h-3/4 w-full flex flex-col md:flex-row justify-center items-center bg-white rounded-2xl md:pr-10 ">
        <article className="relative w-full md:w-2/3 h-full flex">
          <div className="relative w-full h-full overflow-hidden clip-custom2 md:clip-custom rounded-l-2xl">
            <Image
              src={clinicInfo.image}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-center"
              style={{ objectFit: "cover" }}
            />
          </div>
        </article>
        <article className="w-full md:w-2/3 pt-6 md:pt-0 h-3/4 flex ">
          <div className="relative w-full h-full overflow-hidden  flex flex-col justify-around gap-4 py-2 px-6">
            <div className="">
              <Chip
                title={clinicInfo.chip}
                href="/"
                classNames="font-semibold text-gray-700"
              />
            </div>
            <h3 className="text-5xl font-semibold text-gray-800">
              {clinicInfo.title} <br />{" "}
              <span className="text-active">{clinicInfo.chip}</span>
            </h3>
            <p className="text-gray-600 font-semibold text-justify">
              {clinicInfo.description}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ClinicSection;
