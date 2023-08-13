import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 5rem 1rem;


  svg:nth-child(1) {
    width: 100%;
  }

  svg + svg {
    bottom: -1rem;
  }
`;
