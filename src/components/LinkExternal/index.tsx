import React from "react";
import { Container } from "./styles";
import { LinkExternalProps } from "./types";

const LinkExternal = ({ text, href, download }: LinkExternalProps) => {
  return (
    <Container target="_blank" rel="noreferrer" href={href} download={download}>
      {text}
    </Container>
  );
};

export default LinkExternal;
