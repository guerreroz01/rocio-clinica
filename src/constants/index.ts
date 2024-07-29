// Iconos
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";

import CaserSvg from "@/components/CaserSvg";
// Imagenes
import heroPic from "../../public/assets/hero.jpg";
import logoPic from "../../public/assets/logo.png";
import implantsPic from "../../public/assets/implants.jpg";
import threeShapePic from "../../public/assets/3shape.jpg";
import dentalBridgePic from "../../public/assets/dental-bridge.png";
import smileDesignPic from "../../public/assets/smile-design.jpg";
import clinicImage01Pic from "../../public/assets/foto-clinica-01.jpg";
import consultaPic from "../../public/assets/consulta.jpg";
import explainPic from "../../public/assets/explicando.png";
import caserSvg from "../../public/assets/caser.svg";
import sosLogoPic from "../../public/assets/international-sos-logo.webp";
import canalSaludPic from "../../public/assets/canal_salud.png";
import asssaPic from "../../public/assets/asssa.png";
import cardPaymentsPic from "../../public/assets/cards_payments.png";

export const heroImg = heroPic;
export const logoImg = logoPic;
export const implantsImg = implantsPic;
export const threeShapeImg = threeShapePic;
export const dentalBridgeImg = dentalBridgePic;
export const smileDesignImg = smileDesignPic;
export const clinicImage01Img = clinicImage01Pic;
export const consultaImg = consultaPic;
export const explainImg = explainPic;
export const caserSVG = caserSvg;
export const sosLogoImg = sosLogoPic;
export const canalSaludImg = canalSaludPic;
export const asssaImg = asssaPic;
export const cardPaymentsImg = cardPaymentsPic;

// Vídeos
import video01Src from "../../public/assets/videos/video.mp4";
import SantaLuciaSvg from "@/components/SantaLuciaSvg";

export const video01 = video01Src;

//Logo
export const logoHomeLink = {
  href: "/",
  image: logoImg,
};

// Enlaces
export const navLinks = [
  { href: "/clinica", name: "Clínica" },
  { href: "/especialidades", name: "Especialidades" },
  { href: "/promociones", name: "Promociones" },
  { href: "/contacto", name: "Contacto" },
];

//Pie de página
export const footerLinks = [
  { href: "/politicas", name: "Políticas de Privacidad" },
  { href: "/aviso-legal", name: "Aviso Legal" },
  { href: "/politicas-cookies", name: "Políticas de Cookies" },
];

export const footerSocialLinks = [
  { href: "@sg", name: "@Instagram", icon: FaInstagram },
  { href: "@sg", name: "@Facebook", icon: FaFacebook },
  { href: "@sg", name: "@X", icon: FaXTwitter },
  { href: "@sg", name: "@Pinterest", icon: FaPinterest },
];

export const addres = {
  addr: "C/ Vicente Blasco Ibañez, 102, 3º 03201 Elche Alicante",
  tlf1: "965 430 206",
  Tlf1Icon: TbDeviceLandlinePhone,
  tlf2: "673 185 680",
  Tlf2Icon: HiDevicePhoneMobile,
  email: "info@clinicasoniagarcia.com",
  EmailIcon: MdOutlineEmail,
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
  chip: "El Mejor Servicio",
  title: "Dedicados a Darte",
  description:
    "La clínica dental Dra. Sonia García ofrece una atención odontológica integral desde el año 2001. En nuestra clínica puede confiar en un odontólogo con experiencia, formación continua y medios para ofrecerle una atención personalizada y de calidad.",
};

// Horarios
export const horarios = {
  title: "",
  description: "",
};

// Seguros dentales
export const seguros = [
  { href: "https://www.caser.es/seguros-dentales", image: CaserSvg },
  { href: "https://www.internationalsos.es/", image: sosLogoImg },
  { href: "https://www.canalsalud24.com/", image: canalSaludImg },
  { href: "https://www.santalucia.es/", image: SantaLuciaSvg },
  { href: "https://www.asssa.es/", image: asssaImg },
];

export const articles = [
  {
    chip: "Implantes",
    title: "¿Como cuidar tus protesis dentales?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum explicabo quos voluptatum fugit quas qui at voluptates",
    href: "/",
    image: dentalBridgeImg,
    tag: "Implantes",
  },
  {
    chip: "Estética",
    title: "¿En que consiste el diseño de sonrisa?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum explicabo quos voluptatum fugit quas qui at voluptates",
    href: "/",
    image: smileDesignImg,
    tag: "Estética",
  },
  {
    chip: "Tip",
    title: "¿Que hacer y que no hacer despues de un blanqueamiento dental?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum explicabo quos voluptatum fugit quas qui at voluptates",
    href: "/",
    image: consultaImg,
    tag: "Tip",
  },
];
