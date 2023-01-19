import React from "react";
import Mouse from "../../../../components/Mouse";
import { LinkScrollStyled } from "../../../../styles/LinkScrollStyled";
import { Container } from "./styles";

const Hero = () => {
  return (
    <Container>
      <p>Olá, meu nome é</p>
      <h1>Maikol L. Santos</h1>
      <strong>Front-end Developer & UI/UX Designer Jr.</strong>
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
