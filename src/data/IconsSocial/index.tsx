import {
  FaGithub,
  FaLinkedinIn,
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
    icon: <FaYoutube color="#C1CBD3" size={40} />,
    href: "https://www.youtube.com/@maikolsants",
  },
  {
    icon: <FaWhatsapp color="#C1CBD3" size={40} />,
    href: "https://api.whatsapp.com/send?phone=5516981988786",
  },
];
