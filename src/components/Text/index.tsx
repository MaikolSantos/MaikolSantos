import { TextProps } from "./types";

import { Container } from "./styles";

const Title = ({ text }: TextProps) => {
  return <Container>{text}</Container>;
};

export default Title;
