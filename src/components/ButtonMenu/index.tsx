import React, { useState } from "react";

import { Container } from "./styles";
import { ButtonMenuProps } from "./types";

const ButtonMenu = ({ open, onClick }: ButtonMenuProps) => {
  return <Container open={open} onClick={onClick}></Container>;
};

export default ButtonMenu;
