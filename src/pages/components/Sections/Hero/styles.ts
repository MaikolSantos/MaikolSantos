import styled from "styled-components";

import { ContainerSections } from "../../../../styles/Containers";

export const Container = styled(ContainerSections)`
  position: relative;
  text-align: center;
  height: 100%;

  p {
    font-weight: var(--weight-regular);
    font-size: 1rem;
    color: var(--color-grey-100);
  }

  h1 {
    font-weight: var(--weight-regular);
    font-size: 2rem;
    color: var(--color-brand-100);
  }

  strong {
    display: flex;
    align-items: flex-end;
    font-weight: var(--weight-light);
    font-size: 1.25rem;
    line-height: 1;
  }

  a {
    margin-top: 1rem;
  }
`;
