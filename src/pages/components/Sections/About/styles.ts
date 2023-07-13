import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  > svg {
    width: 100%;
    max-width: 45rem;
    height: auto;
    margin: 5rem 0;
  }

  > a {
    margin-top: 3rem;
  }
`;
