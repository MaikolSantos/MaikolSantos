import React, { useContext, useState } from "react";

import Header from "../../components/Header";
import ButtonMenu from "../../components/ButtonMenu";

import { MenuContext } from "../../contexts/MenuContext";

const Home = () => {
  const {isOpen, changeMenu} = useContext(MenuContext)

  return (
    <div>
      <Header>
        <ButtonMenu open={isOpen} onClick={changeMenu} />
      </Header>
    </div>
  );
};

export default Home;
