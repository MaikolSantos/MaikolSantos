import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  max-width: 70rem;


  > svg {
    width: 100%;
    height: auto;
    margin: 2rem 0;

    @media (min-width: 600px) {
      margin: 5rem 0;
    }
  }

  > a {
    margin-top: 3rem;
  }
`;
