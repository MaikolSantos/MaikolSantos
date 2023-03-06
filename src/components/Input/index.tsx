import { FaSearch } from "react-icons/fa";

import { InputProps } from "./types";

import { Container } from "./styles";

const Input = ({ onChange }: InputProps) => {
  return (
    <Container>
      <label htmlFor="search">
        <FaSearch />
      </label>
      <input id="search" type="text" onChange={onChange} />
    </Container>
  );
};

export default Input;
