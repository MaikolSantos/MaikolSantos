import { TitleProps } from "./types";

import { Container } from "./styles";

const Title = ({ text }: TitleProps) => {
  return <Container>{text}</Container>;
};

export default Title;
