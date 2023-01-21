import { useTypewriter, Cursor } from "react-simple-typewriter";

import Mouse from "../../../../components/Mouse";

import { Container } from "./styles";
import { CursorStyled } from "../../../../styles/CursorStyled";
import { LinkScrollStyled } from "../../../../styles/LinkScrollStyled";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Front-end Developer & UI/UX Designer",
      "Back-end Developer & UI/UX Designer",
      "Full Stack Developer & UI/UX Designer",
    ],
    loop: true,
  });

  return (
    <Container>
      <p>Olá, meu nome é</p>
      <h1>Maikol L. Santos</h1>
      <strong>
        {text}
        <Cursor
          cursorBlinking={true}
          cursorColor={"#0A6ABF"}
          cursorStyle={<CursorStyled />}
        />
      </strong>
      <LinkScrollStyled
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Sobre
      </LinkScrollStyled>
      <Mouse />
    </Container>
  );
};

export default Hero;
