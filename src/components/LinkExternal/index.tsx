import { LinkExternalProps } from "./types";

import { Container } from "./styles";

const LinkExternal = ({ text, href, download, variant }: LinkExternalProps) => {
  return (
    <Container
      variant={variant}
      target="_blank"
      rel="noreferrer"
      href={href}
      download={download}
    >
      {text}
    </Container>
  );
};

export default LinkExternal;
