import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { iconsProps } from "./types";

export const iconsSocial: iconsProps[] = [
  {
    icon: <FaGithub color="#C1CBD3" size={40} />,
    href: "https://github.com/MaikolSantos",
  },
  {
    icon: <FaLinkedinIn color="#C1CBD3" size={40} />,
    href: "https://www.linkedin.com/in/maikol-lourencon/",
  },
  {
    icon: <FaInstagram color="#C1CBD3" size={40} />,
    href: "https://www.instagram.com/maikol.sants/",
  },
  {
    icon: <FaFacebookF color="#C1CBD3" size={40} />,
    href: "https://www.facebook.com/sants.maikol/",
  },
  {
    icon: <FaYoutube color="#C1CBD3" size={40} />,
    href: "https://www.youtube.com/@maikolsants",
  },
  {
    icon: <FaWhatsapp color="#C1CBD3" size={40} />,
    href: "hhttps://api.whatsapp.com/send?phone=5516981988786",
  },
];
