import React from "react";
import { Container } from "./styles";
import { LinkExternalProps } from "./types";

const LinkExternal = ({ text, href, download }: LinkExternalProps) => {
  return (
    <Container href={href} download={download}>
      {text}
    </Container>
  );
};

export default LinkExternal;
