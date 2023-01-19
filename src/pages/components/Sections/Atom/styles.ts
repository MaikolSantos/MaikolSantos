import styled from "styled-components";
import { ContainerDefault } from "../../../../styles/Containers";

export const Container = styled(ContainerDefault)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  svg + svg {
    bottom: -1rem;
  }
`;
