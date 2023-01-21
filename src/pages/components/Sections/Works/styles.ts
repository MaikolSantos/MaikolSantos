import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  ul {
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 40rem;
    gap: 1.875rem;
  }
`;
