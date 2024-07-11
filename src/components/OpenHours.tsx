import { clinicInfo, explainImg } from "@/constants";
import Image from "next/image";
import React from "react";
import Chip from "./Chip";
import Btn01 from "./Btn01";

function OpenHours() {
  return (
    <section className="md:px-10 bg-black">
      <div className="relative  max-w-7xl mx-auto flex flex-col-reverse md:flex-row h-1/3 md:h-[600px] gap-6 justify-center items-center px-10">
        <article className="w-full md:w-2/3 h-3/4 pt-6 md:pt-0 flex backdrop-blur-xl bg-white rounded-2xl ">
          <div className="relative w-full h-full overflow-hidden  flex flex-col gap-4 py-8 px-6">
            <h3 className="text-4xl font-semibold text-gray-800 text-center">
              Consulta Nuestros
              <br /> <span className="text-active">Horarios</span>
            </h3>
            <p className="text-gray-600 font-semibold text-justify pt-2">
              1ª visita + diagnóstico + presupuesto GRATIS
            </p>
            <div className="w-full flex-1  flex flex-col justify-around">
              <div>
                <h3 className="text-center text-xl font-semibold text-gray-700">
                  Mañanas
                </h3>
                <div className="w-full flex justify-around border-b">
                  <p className="font-semibold text-lg text-gray-600">
                    Lunes a Viernes
                  </p>
                  <p className="text-gray-600">09:00h a 13:00h</p>
                </div>
              </div>
              <div>
                <h3 className="text-center text-xl font-semibold text-gray-700">
                  Tardes
                </h3>
                <div className="w-full flex justify-around border-b">
                  <p className="font-semibold text-lg text-gray-600">
                    Lunes a Viernes
                  </p>
                  <p className="text-gray-600">16:00h a 20:00h</p>
                </div>
              </div>
              <div className="self-center">
                <Btn01
                  title="Llama al 666 666 6666"
                  href="/"
                  classNames="text-white bg-active hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        </article>
        <article className="clip-custom3 w-2/3 h-full overflow-visible bg-active"></article>
        <Image
          src={explainImg}
          alt=""
          className="static -mt-20 md:mt-0 md:absolute  bottom-0 right-0 w-full h-auto md:w-auto  md:h-[700px] object-center"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

export default OpenHours;
