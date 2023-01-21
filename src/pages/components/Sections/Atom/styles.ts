import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  position: relative;

  svg + svg {
    bottom: -1rem;
  }
`;
