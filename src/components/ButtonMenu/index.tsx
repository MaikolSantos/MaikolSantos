import { ButtonMenuProps } from "./types";

import { Container } from "./styles";

const ButtonMenu = ({ open, onClick }: ButtonMenuProps) => {
  return <Container open={open} onClick={onClick}></Container>;
};

export default ButtonMenu;
