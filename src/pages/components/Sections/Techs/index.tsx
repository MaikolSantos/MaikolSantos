import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import { Container } from "./styles";
import LinkExternal from "../../../../components/LinkExternal";
import { Icons } from "../../../../data/Icons";

const Techs = () => {
  return (
    <Container id="techs">
      <Title text="Tecnologias" />
      <Text text="Aqui você conhece as tecnologias que mais utilizo ou estudei recentemente" />
      <ul>
        {Icons.map((item, index) => {
          const { icon, name } = item;

          return (
            <li key={index}>
              {icon}
              <small>{name}</small>
            </li>
          );
        })}
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
