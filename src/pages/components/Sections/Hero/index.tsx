import React from "react";
import Mouse from "../../../../components/Mouse";
import { LinkStyled } from "../../../../styles/LinkStyled";
import { Container } from "./styles";

const Hero = () => {
  return (
    <Container>
      <p>Olá, Meu nome é</p>
      <h1>Maikol L. Santos</h1>
      <strong>Front-end Developer & UI/UX Designer Jr.</strong>
      <LinkStyled
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Sobre
      </LinkStyled>
      <Mouse />
    </Container>
  );
};

export default Hero;
