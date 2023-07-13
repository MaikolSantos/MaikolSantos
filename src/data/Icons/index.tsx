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
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { iconsProps } from "./types";

export const icons: iconsProps[] = [
  {
    icon: <FaHtml5 color="#C1CBD3" size={40} />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt color="#C1CBD3" size={40} />,
    name: "CSS3",
  },
  {
    icon: <FaJsSquare color="#C1CBD3" size={40} />,
    name: "Javascript",
  },
  {
    icon: <SiTypescript color="#C1CBD3" size={40} />,
    name: "Typescript",
  },
  {
    icon: <FaReact color="#C1CBD3" size={40} />,
    name: "React",
  },
  {
    icon: <FaSass color="#C1CBD3" size={40} />,
    name: "Sass",
  },
  {
    icon: <FaGitAlt color="#C1CBD3" size={40} />,
    name: "Git",
  },
  {
    icon: <FaGithub color="#C1CBD3" size={40} />,
    name: "GitHub",
  },
  {
    icon: <FaFigma color="#C1CBD3" size={40} />,
    name: "Figma",
  },
  {
    icon: <FaDatabase color="#C1CBD3" size={40} />,
    name: "SQL",
  },
  {
    icon: <FaNodeJs color="#C1CBD3" size={40} />,
    name: "Node.js",
  },
  {
    icon: <FaPython color="#C1CBD3" size={40} />,
    name: "Python",
  },
];
