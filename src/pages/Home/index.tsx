import React, { useContext, useState } from "react";

import Header from "../../components/Header";
import ButtonMenu from "../../components/ButtonMenu";

import { MenuContext } from "../../contexts/MenuContext";
import Menu from "../../components/Menu";

const Home = () => {
  const { isOpen, changeMenu } = useContext(MenuContext);

  return (
    <div>
      <Header>
        <ButtonMenu open={isOpen} onClick={changeMenu} />
        {isOpen && <Menu />}
      </Header>
    </div>
  );
};

export default Home;
