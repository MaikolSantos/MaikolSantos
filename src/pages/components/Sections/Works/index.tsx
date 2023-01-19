import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import { Container } from "./styles";
import { works } from "../../../../data/works";
import Card from "../../../../components/Card";
import LinkExternal from "../../../../components/LinkExternal";
import { LinkStyled } from "../../../../styles/LinkStyled";

const Works = () => {
  return (
    <Container id="works">
      <Title text="Portfólio" />
      <Text text="Alguns dos meus últimos trabalhos" />

      <ul>
        {works.map((item, index) => {
          const { title, description, repository, demo } = item;
          return (
            <Card
              key={index}
              title={title}
              description={description}
              repository={repository}
              demo={demo}
            />
          );
        })}
      </ul>

      <LinkStyled to="/works">Ver mais</LinkStyled>

      <Text text="Veja também meu Github" />
      <LinkExternal
        text="Github"
        href="https://github.com/MaikolSantos"
        download="curriculo.pdf"
      />
    </Container>
  );
};

export default Works;
