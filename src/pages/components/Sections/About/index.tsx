import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import Setup from "../../../../components/Setup";
import LinkExternal from "../../../../components/LinkExternal";

import { Container } from "./styles";

import curriculo from "../../../../assets/downloads/curriculo.pdf";

const About = () => {
  return (
    <Container id="about">
      <Title text="Sobre" />
      <Text text="Sou apaixonado pelo desenvolvimento Front-end. Porém antes de começar a criação dos códigos gosto de me planejar, pra isso uso Figma como suporte para criação das minhas referências visuais seguindo conceitos de UI e UX Design." />
      <Setup />
      <Text text="Sou formado em Análise e Desenvolvimento de Sistemas. Além disso sigo fazendo cursos para aprimorar minhas habilidades e estar atualizado com as tecnologias mais usadas no mercado." />
      <LinkExternal
        text="Curriculo"
        href={curriculo}
        download="curriculo.pdf"
      />
    </Container>
  );
};

export default About;
