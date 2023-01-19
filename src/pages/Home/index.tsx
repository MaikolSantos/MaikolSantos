import React, { useContext, useState } from "react";

import Header from "../../components/Header";
import ButtonMenu from "../../components/ButtonMenu";

import { MenuContext } from "../../contexts/MenuContext";
import Menu from "../../components/Menu";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Techs from "../components/Sections/Techs";
import Atom from "../components/Sections/Atom";
import Works from "../components/Sections/Works";


const Home = () => {
  const { isOpen, changeMenu } = useContext(MenuContext);

  return (
    <main>
      <Header>
        <ButtonMenu open={isOpen} onClick={changeMenu} />
        {isOpen && <Menu />}
      </Header>
      <Hero />
      <About />
      <Techs />
      <Atom />
      <Works />
    </main>
  );
};

export default Home;
