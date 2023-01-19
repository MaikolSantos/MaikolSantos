import React from "react";
import { Container } from "./styles";
import { TextProps } from "./types";

const Title = ({ text }: TextProps) => {
  return <Container>{text}</Container>;
};

export default Title;
