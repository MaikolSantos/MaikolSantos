import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import Title from "../../../../components/Title";
import LinkExternal from "../../../../components/LinkExternal";

import { works } from "../../../../data/works";

import { Container } from "./styles";
import { LinkStyled } from "../../../../styles/LinkStyled";

const Works = () => {
  return (
    <Container id="works">
      <Title text="Portfólio" />
      <Text text="Alguns dos meus últimos trabalhos" />

      <ul>
        {works.map((item, index) => {
          const { title, description, repository, demo } = item;
          if (index <= 3) {
            return (
              <Card
                key={index}
                title={title}
                description={description}
                repository={repository}
                demo={demo}
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
