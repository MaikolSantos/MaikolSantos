import styled from 'styled-components';
import { ContainerDefault } from '../../../../styles/Containers';

export const Container = styled(ContainerDefault)`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
  height: 100vh;

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
    font-weight: var(--weight-light);
    font-size: 1.25rem;
  }

  a {
    margin-top: 1rem;
  }
  
`