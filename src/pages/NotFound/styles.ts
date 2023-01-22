import styled from 'styled-components';

import { ContainerSections } from '../../styles/Containers';

export const Container = styled(ContainerSections)`
  height: 100vh;

  h2 {
    font-size: 2rem;
    color: var(--color-brand-100);
  }

  p {
    font-size: 1.25rem;
  }
`