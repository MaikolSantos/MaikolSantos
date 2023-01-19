import { Container } from "./styles";

import { iconsSocial } from "../../../../data/IconsSocial";
import Logo from "../../../../components/Logo";

const Contact = () => {
  return (
    <Container id="contact">
      <ul>
        {iconsSocial.map((item, index) => {
          const { icon, href } = item;

          return (
            <li key={index}>
              <a href={href} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <Logo />
      <a href="mailto:maikol.lourencon@gmail.com">maikol.lourencon@gmail.com</a>
    </Container>
  );
};

export default Contact;
