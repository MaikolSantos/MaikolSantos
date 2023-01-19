import styled from "styled-components";
import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  height: 100vh;
  position: relative;

  svg + svg {
    bottom: -1rem;
  }
`;
