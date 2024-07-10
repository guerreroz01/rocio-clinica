// Imagenes
import heroPic from "../../public/assets/hero.jpg";
import logoPic from "../../public/assets/logo.png";
import implantsPic from "../../public/assets/implants.jpg";
import threeShapePic from "../../public/assets/3shape.jpg";
import dentalBridgePic from "../../public/assets/dental-bridge.png";
import smileDesignPic from "../../public/assets/smile-design.jpg";

export const heroImg = heroPic;
export const logoImg = logoPic;
export const implantsImg = implantsPic;
export const threeShapeImg = threeShapePic;
export const dentalBridgeImg = dentalBridgePic;
export const smileDesignImg = smileDesignPic;

// Vídeos

export const video01 = "../../public/assets/video.mp4";

// Enlaces
export const navLinks = [
  { href: "/clinica", name: "Clínica" },
  { href: "/especialidades", name: "Especialidades" },
  { href: "/promociones", name: "Promociones" },
  { href: "/contacto", name: "Contacto" },
];

export const logoHomeLink = {
  href: "/",
  image: logoImg,
};

// Home Hero text
export const heroTextContent = {
  title: "Obten una sonrisa radiante con nuestros modernos métodos!",
  subtitle: "Te invitamos a obtener la sonrisa que quieres",
  links: [
    { title: "Cirugía", href: "/" },
    { title: "Endodoncia", href: "/" },
    { title: "Estética", href: "/" },
    { title: "Implantes", href: "/" },
    { title: "Odontopediatría", href: "/" },
    { title: "Ortodoncia", href: "/" },
    { title: "Periodoncia", href: "/" },
    { title: "Prótesis", href: "/" },
  ],
  parragraph:
    "¡Descubre tu mejor sonrisa en Clínica Dental Salud Perfecta! Nuestro equipo de expertos se dedica a brindarte un cuidado dental de alta calidad en un ambiente acogedor y profesional!",
  promotion: {
    title:
      "Recupera tu sonrisa con nuestros implantes dentales al 20% de descuento!",
    img: implantsImg,
    linkTitle: "Promoción",
    href: "/",
  },
};

// Banner 01
export const banner01 = [
  {
    image: threeShapeImg,
    href: "/",
    linkTitle: "Precios accesibles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus maiores molestias praesentium consequuntur nihil",
  },
  {
    image: dentalBridgeImg,
    href: "/",
    linkTitle: "Dentistas profesionales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus maiores molestias praesentium consequuntur nihil",
  },
  {
    image: smileDesignImg,
    href: "/",
    linkTitle: "Servicio satisfactorio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus maiores molestias praesentium consequuntur nihil",
  },
];
