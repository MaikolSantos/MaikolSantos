import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  ul {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
    gap: 1rem;
  }
`;
