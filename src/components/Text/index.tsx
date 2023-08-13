import { TextProps } from "./types";

import { Container } from "./styles";

const Text = ({ text }: TextProps) => {
  return <Container>{text}</Container>;
};

export default Text;
