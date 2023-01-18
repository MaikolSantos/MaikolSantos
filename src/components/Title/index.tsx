import React from "react";
import { Container } from "./styles";
import { TitleProps } from "./types";

const Title = ({ text }: TitleProps) => {
  return <Container>{text}</Container>;
};

export default Title;
