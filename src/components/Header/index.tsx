import { HeaderProps } from "./types";

import { Container } from "./styles";

const Header = ({ children }: HeaderProps) => {
  return <Container>{children}</Container>;
};

export default Header;
