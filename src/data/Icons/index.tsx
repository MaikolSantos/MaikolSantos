import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaFigma,
  FaWordpress
} from "react-icons/fa";
import { SiTypescript, SiAstro, SiNextdotjs } from "react-icons/si";

import { iconsProps } from "./types";

export const icons: iconsProps[] = [
  {
    icon: <FaHtml5 color="#C1CBD3" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt color="#C1CBD3" />,
    name: "CSS3",
  },
  {
    icon: <FaJsSquare color="#C1CBD3" />,
    name: "Javascript",
  },
  {
    icon: <SiTypescript color="#C1CBD3" />,
    name: "Typescript",
  },
  {
    icon: <FaReact color="#C1CBD3" />,
    name: "React",
  },
  {
    icon: <SiNextdotjs color="#C1CBD3" />,
    name: "Next.js",
  },
  {
    icon: <FaSass color="#C1CBD3" />,
    name: "Sass",
  },
  {
    icon: <FaGitAlt color="#C1CBD3" />,
    name: "Git",
  },
  {
    icon: <FaGithub color="#C1CBD3" />,
    name: "GitHub",
  },
  {
    icon: <FaFigma color="#C1CBD3" />,
    name: "Figma",
  },
  {
    icon: <FaDatabase color="#C1CBD3" />,
    name: "SQL",
  },
  {
    icon: <FaNodeJs color="#C1CBD3" />,
    name: "Node.js",
  },
  {
    icon: <FaPython color="#C1CBD3" />,
    name: "Python",
  },
  {
    icon: <SiAstro color="#C1CBD3" />,
    name: "Astro",
  },
  {
    icon: <FaWordpress color="#C1CBD3" />,
    name: "WordPress",
  },
];
