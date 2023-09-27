import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import Title from "../../../../components/Title";

import { works } from "../../../../data/works";

import { Container } from "./styles";
import { LinkStyled } from "../../../../styles/LinkStyled";

const Works = () => {
  return (
    <Container id="works">
      <Title text="Portfólio" />
      <Text text="Explore uma seleção dos projetos que compõem o meu portfólio:" />

      <ul>
        {works.map((item, index) => {
          const { title, description, repository, demo } = item;
          if (index <= 2) {
            return (
              <Card
                key={index}
                title={title}
                description={description}
                repository={repository}
                demo={demo}
                variant="section"
              />
            );
          }
        })}
      </ul>
      <LinkStyled to="/works">Ver mais</LinkStyled>
    </Container>
  );
};

export default Works;
