import { useTypewriter, Cursor } from "react-simple-typewriter";

import Mouse from "../../../../components/Mouse";

import { Container } from "./styles";
import { CursorStyled } from "../../../../styles/CursorStyled";
import { LinkScrollStyled } from "../../../../styles/LinkScrollStyled";
import astronaut from "../../../../assets/images/astronaut.png";
import Stars from "../../../../components/Stars";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Front-end Developer", "Web Designer", "UI & UX Designer"],
    loop: true,
  });

  return (
    <Container id="hero">
      <p>Olá, meu nome é</p>
      <h1>Maikol Santos</h1>
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

      <img src={astronaut} alt="Astronaut" />
      
      <Stars />
    </Container>
  );
};

export default Hero;
