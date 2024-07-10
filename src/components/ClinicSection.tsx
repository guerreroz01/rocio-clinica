import { clinicInfo } from "@/constants";
import Image from "next/image";
import React from "react";

function ClinicSection() {
  return (
    <section className="w-full flex h-[700px] justify-center items-center ">
      <div className="max-w-7xl h-3/4 w-full flex justify-center items-center bg-white rounded-2xl pr-10">
        <article className="relative w-2/3 h-full flex">
          <div className="relative w-full h-full overflow-hidden clip-custom rounded-l-2xl">
            <Image
              src={clinicInfo.image}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-center"
              style={{ objectFit: "cover" }}
            />
          </div>
        </article>
        <article className="w-2/3 h-3/4 flex ">
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 backdrop-blur-lg bg-active/30 rounded-2xl w-full ml-10 h-full"></div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ClinicSection;
