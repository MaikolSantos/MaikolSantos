import { useContext } from "react";

import { Link } from "react-scroll";

import { MenuContext } from "../../contexts/MenuContext";

import { Container } from "./styles";

import planet from "../../assets/images/menu/planet.png";

const Menu = () => {
  const { changeMenu } = useContext(MenuContext);

  const menuItens = [
    {
      name: "Sobre",
      to: "about",
    },
    {
      name: "Tecnologias",
      to: "techs",
    },
    {
      name: "Portfólio",
      to: "works",
    },
    {
      name: "Contato",
      to: "contact",
    },
  ];

  return (
    <Container>
      <ul>
        {menuItens.map(({ name, to }) => {
          return (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                onClick={changeMenu}
              >
                <img src={planet} alt="Planetinha" />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Menu;
