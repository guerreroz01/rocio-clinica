import {
  logoHomeLink,
  footerSocialLinks,
  navLinks,
  footerLinks,
  addres,
  cardPaymentsImg,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const { Tlf1Icon, Tlf2Icon, EmailIcon } = addres;
  return (
    <footer className="w-full bg-black text-white pt-20 pb-4">
      <div className="max-w-screen-2xl flex flex-col items-center lg:flex-row mx-auto">
        <div className="pb-10 lg:py-2 px-4  w-full lg:w-1/4 flex flex-col items-center justify-center">
          <Link href={logoHomeLink.href}>
            <Image width={100} src={logoHomeLink.image} alt="Logo" />
          </Link>
          <ul className="w-full flex justify-around px-4 pt-10">
            {footerSocialLinks.map(({ name, icon: Icon, href }, i) => {
              return (
                <li
                  key={`social-link-${i}-${name}`}
                  className="relative flex flex-col items-center gap-2 cursor-pointer group transition-all duration-500"
                >
                  {<Icon size={26} />}
                  <p className="absolute hidden group-hover:flex -bottom-5 text-sm font-semibold ">
                    {name}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full py-2 px-4 flex-1 flex justify-around">
          <div className=" flex flex-col gap-2">
            <h4 className="font-semibold text-md uppercase border-b border-b-active text-center mb-2">
              Home
            </h4>
            {navLinks.map((element, i) => {
              return (
                <Link
                  href={element.href}
                  key={`footer-links-${i}-${element.name}`}
                  className="text-sm hover:text-active"
                >
                  {element.name}
                </Link>
              );
            })}
          </div>
          <div className=" flex flex-col gap-2">
            <h4 className="font-semibold text-md uppercase border-b border-b-active text-center mb-2">
              Políticas
            </h4>
            {footerLinks.map((element, i) => {
              return (
                <Link
                  href={element.href}
                  key={`footer-links-${i}-${element.name}`}
                  className="text-sm hover:text-active"
                >
                  {element.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" py-2 px-4 w-full lg:w-1/4 lg: text-center">
          <h4 className="text-lg font-semibold py-2">¿Donde estamos?</h4>
          <p className="text-sm">{addres.addr}</p>
          <div className="w-full flex flex-col py-2 items-center">
            <div className="flex lg:w-full gap-2 items-center">
              <Tlf1Icon size={20} />
              <p>{addres.tlf1}</p>
            </div>
            <div className="flex lg:w-full gap-2 items-center">
              <Tlf2Icon size={20} />
              <p>{addres.tlf2}</p>
            </div>
            <div className="flex lg:w-full gap-2 items-center">
              <EmailIcon size={20} />
              <p>{addres.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col lg:flex-row gap-4 items-center px-4 pt-5  max-w-screen-2xl mx-auto border-t mt-4">
        <p>@2018 Clínica Dental Sonia García. Todos los derechos reservados</p>
        <Image src={cardPaymentsImg} alt="" height={45} />
      </div>
    </footer>
  );
}

export default Footer;
