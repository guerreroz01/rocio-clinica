// Imagenes
import heroPic from "../../public/assets/hero.jpg";
import logoPic from "../../public/assets/logo.png";
import implantsPic from "../../public/assets/implants.jpg";
import threeShapePic from "../../public/assets/3shape.jpg";
import dentalBridgePic from "../../public/assets/dental-bridge.png";
import smileDesignPic from "../../public/assets/smile-design.jpg";
import video01Src from "../../public/assets/videos/video.mp4";
import clinicImage01Pic from "../../public/assets/foto-clinica-01.jpg";

export const heroImg = heroPic;
export const logoImg = logoPic;
export const implantsImg = implantsPic;
export const threeShapeImg = threeShapePic;
export const dentalBridgeImg = dentalBridgePic;
export const smileDesignImg = smileDesignPic;
export const clinicImage01Img = clinicImage01Pic;
// Vídeos

export const video01 = video01Src;

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

// Seccion del vídeo
export const videoSection = {
  title: "Testimonios de Nuestros Pacientes",
  description: "",
  testimonials: [
    {
      stars: "⭐️⭐️⭐️⭐️⭐",
      description:
        "¡Increíble experiencia en Clínica Dental Salud Perfecta! Los implantes dentales han transformado mi sonrisa. El equipo fue amable y profesional en todo momento. ¡Altamente recomendados! - Laura G.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐",
      description:
        "Tenía mucho miedo al dentista, pero aquí me hicieron sentir como en casa. Mi tratamiento fue un éxito y ahora no puedo dejar de sonreír. ¡Gracias! - Pedro M.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐",
      description:
        "La mejor clínica dental que he visitado. Modernos, eficientes y muy atentos. Mis implantes dentales lucen y se sienten perfectos. - Sofía R.",
    },
  ],
};

// Sección de la clínica
export const clinicInfo = {
  image: clinicImage01Img,
};
