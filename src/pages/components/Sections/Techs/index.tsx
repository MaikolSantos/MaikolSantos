import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import { Container } from "./styles";
import LinkExternal from "../../../../components/LinkExternal";
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

const Techs = () => {
  return (
    <Container id="techs">
      <Title text="Tecnologias" />
      <Text text="Aqui você conhece as tecnologias que mais utilizo ou estudei recentemente" />
      <ul>
        <li>
          <FaHtml5 color="#C1CBD3" size={40} />
          <small>HTML5</small>
        </li>
        <li>
          <FaCss3Alt color="#C1CBD3" size={40} />
          <small>CSS3</small>
        </li>
        <li>
          <FaJsSquare color="#C1CBD3" size={40} />
          <small>Javascript</small>
        </li>
        <li>
          <SiTypescript color="#C1CBD3" size={40} />
          <small>Typescript</small>
        </li>
        <li>
          <FaReact color="#C1CBD3" size={40} />
          <small>React</small>
        </li>
        <li>
          <FaNodeJs color="#C1CBD3" size={40} />
          <small>Node.js</small>
        </li>
        <li>
          <FaPython color="#C1CBD3" size={40} />
          <small>Python</small>
        </li>
        <li>
          <FaSass color="#C1CBD3" size={40} />
          <small>Sass</small>
        </li>
        <li>
          <FaGitAlt color="#C1CBD3" size={40} />
          <small>Git</small>
        </li>
        <li>
          <FaGithub color="#C1CBD3" size={40} />
          <small>GitHub</small>
        </li>
        <li>
          <FaDatabase color="#C1CBD3" size={40} />
          <small>SQL</small>
        </li>
        <li>
          <FaFigma color="#C1CBD3" size={40} />
          <small>Figma</small>
        </li>
      </ul>
      <LinkExternal
        text="Github"
        href="https://github.com/MaikolSantos"
        download="curriculo.pdf"
      />
    </Container>
  );
};

export default Techs;
