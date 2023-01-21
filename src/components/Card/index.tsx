import LinkExternal from "../LinkExternal";

import { CardProps } from "./types";

import { ButtonGroup, Container } from "./styles";

const Card = ({ title, description, repository, demo }: CardProps) => {
  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <p title={description}>{description}</p>
        <ButtonGroup>
          <LinkExternal href={repository} variant="card" text="Repo" />
          <LinkExternal href={demo} variant="card" text="Demo" />
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default Card;
