import { FaSearch } from "react-icons/fa";

import { Container } from "./styles";

interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({ onChange }: InputProps) => {
  return (
    <Container>
      <FaSearch />
      <input type="text" onChange={onChange} />
    </Container>
  );
};

export default Input;
